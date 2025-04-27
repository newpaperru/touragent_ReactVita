import { useState, useEffect, useMemo, useCallback } from "react";

const fetchArchiveData = async () => {
    const response = await fetch("http://localhost:3000/archive");
    if (!response.ok) throw new Error("Network response was not ok");
    return response.json();
};

const SORT_NAMES = {
    DATE: "date",
    PRICE_ASC: "price-asc",
    PRICE_DESC: "price-desc"
}

export const useArchiveData = () => {
    const [state, setState] = useState({
        archiveData: [],
        activeFilter: null,
        textFilters: {
            destination: "",
            priceFrom: "",
            priceTo: "",
            ratingTo: ""
        },
        currentPage: 1,
        isLoading: false,
        error: null
    });

    const itemsPerPage = 6;

    const fetchData = useCallback(async () => {
        setState(prev => ({ ...prev, isLoading: true }));
        try {
            const data = await fetchArchiveData();
            setState(prev => ({
                ...prev,
                archiveData: data,
                isLoading: false
            }));
        } catch (error) {
            setState(prev => ({
                ...prev,
                error: error.message,
                isLoading: false
            }));
        }
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const getFilteredData = useMemo(() => {
        const { archiveData, activeFilter, textFilters } = state;
        let result = [...archiveData];

        // Текстовая фильтрация
        if (textFilters.destination) {
            const searchTerm = textFilters.destination.toLowerCase();
            result = result.filter(item =>
                item.country.toLowerCase().includes(searchTerm)
            );
        }

        if (textFilters.priceFrom) {
            const minPrice = Number(textFilters.priceFrom);
            result = result.filter(item => Number(item.price) >= minPrice);
        }

        if (textFilters.priceTo) {
            const maxPrice = Number(textFilters.priceTo);
            result = result.filter(item => Number(item.price) <= maxPrice);
        }

        if (textFilters.ratingTo) {
            const maxRating = Number(textFilters.ratingTo);
            result = result.filter(item => Number(item.rating) <= maxRating);
        }

        // Сортировка
        if (activeFilter) {
            switch (activeFilter) {
                case SORT_NAMES.DATE:
                    return result.sort((a, b) => new Date(a.date) - new Date(b.date));
                case SORT_NAMES.PRICE_ASC:
                    return result.sort((a, b) => Number(a.price) - Number(b.price));
                case SORT_NAMES.PRICE_DESC:
                    return result.sort((a, b) => Number(b.price) - Number(a.price));
                default:
                    return result;
            }
        }

        return result;
    }, [state.archiveData, state.activeFilter, state.textFilters]);

    const paginatedData = useMemo(() => {
        const startIndex = (state.currentPage - 1) * itemsPerPage;
        return getFilteredData.slice(startIndex, startIndex + itemsPerPage);
    }, [getFilteredData, state.currentPage]);

    const totalPages = Math.ceil(getFilteredData.length / itemsPerPage);

    const setActiveFilter = useCallback((filter) => {
        setState(prev => ({
            ...prev,
            activeFilter: filter,
            currentPage: 1
        }));
    }, []);

    const setTextFilters = useCallback((filters) => {
        setState(prev => ({
            ...prev,
            textFilters: filters,
            currentPage: 1
        }));
    }, []);

    const resetFilter = useCallback(() => {
        setState(prev => ({
            ...prev,
            activeFilter: null,
            textFilters: {
                destination: "",
                priceFrom: "",
                priceTo: "",
                ratingTo: ""
            },
            currentPage: 1
        }));
    }, []);

    const goToPage = useCallback((page) => {
        setState(prev => ({
            ...prev,
            currentPage: Math.max(1, Math.min(page, totalPages))
        }));
    }, [totalPages]);

    return {
        archiveData: state.archiveData,
        filteredData: paginatedData,
        fullFilteredData: getFilteredData,
        activeFilter: state.activeFilter,
        setActiveFilter,
        textFilters: state.textFilters,
        setTextFilters,
        resetFilter,
        currentPage: state.currentPage,
        totalPages,
        goToPage,
        isLoading: state.isLoading,
        error: state.error
    };
};