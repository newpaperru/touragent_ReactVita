import { useState, useEffect, useMemo } from "react";

export const useArchiveData = () => {
    const [archiveData, setArchiveData] = useState([]);
    const [activeFilter, setActiveFilter] = useState(null);
    const [textFilters, setTextFilters] = useState({
        destination: "",
        priceFrom: "",
        priceTo: "",
        ratingTo: ""
    });
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(6);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await fetch("http://localhost:3000/archive");
                if (!response.ok) throw new Error("Network response was not ok");
                const data = await response.json();
                setArchiveData(data);
            } catch (error) {
                setError(error.message);
                console.error("Error loading data:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    const getFilteredData = useMemo(() => {
        let result = [...archiveData];

        // Текстовая фильтрация
        if (textFilters.destination) {
            result = result.filter(item => 
                item.country.toLowerCase().includes(textFilters.destination.toLowerCase())
            );
        }

        if (textFilters.priceFrom) {
            result = result.filter(item => 
                Number(item.price) >= Number(textFilters.priceFrom)
            );
        }

        if (textFilters.priceTo) {
            result = result.filter(item => 
                Number(item.price) <= Number(textFilters.priceTo)
            );
        }

        if (textFilters.ratingTo) {
            result = result.filter(item => 
                Number(item.rating) <= Number(textFilters.ratingTo)
            );
        }

        // Сортировка
        if (activeFilter) {
            switch (activeFilter) {
                case "date": 
                    return result.sort((a, b) => new Date(a.date) - new Date(b.date));
                case "price-asc": 
                    return result.sort((a, b) => Number(a.price) - Number(b.price));
                case "price-desc": 
                    return result.sort((a, b) => Number(b.price) - Number(a.price));
                default: 
                    return result;
            }
        }

        return result;
    }, [archiveData, activeFilter, textFilters]);

    // Пагинация
    const paginatedData = useMemo(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        return getFilteredData.slice(startIndex, startIndex + itemsPerPage);
    }, [getFilteredData, currentPage, itemsPerPage]);

    const totalPages = Math.ceil(getFilteredData.length / itemsPerPage);

    const resetFilter = () => {
        setActiveFilter(null);
        setTextFilters({
            destination: "",
            priceFrom: "",
            priceTo: "",
            ratingTo: ""
        });
        setCurrentPage(1);
    };

    const goToPage = (page) => {
        setCurrentPage(Math.max(1, Math.min(page, totalPages)));
    };

    return {
        archiveData,
        filteredData: paginatedData,
        fullFilteredData: getFilteredData,
        activeFilter,
        setActiveFilter,
        textFilters,
        setTextFilters,
        resetFilter,
        currentPage,
        totalPages,
        goToPage,
        isLoading,
        error
    };
};