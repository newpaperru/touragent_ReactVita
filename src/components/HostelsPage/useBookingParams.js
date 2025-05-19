import { useState } from "react";

export const useBookingParams = (initialState = {}) => {
    const [params, setParams] = useState({
        startDate: initialState.startDate || null,
        endDate: initialState.endDate || null,
        adults: initialState.adults || 1,
        children: initialState.children || 0,
    });

    const updateParams = (newParams) => {
        setParams(prev => ({ ...prev, ...newParams }));
    };

    const getQueryString = () => {
        const queryParams = new URLSearchParams();
        if (params.startDate) queryParams.append("startDate", params.startDate.toISOString());
        if (params.endDate) queryParams.append("endDate", params.endDate.toISOString());
        queryParams.append("adults", params.adults);
        queryParams.append("children", params.children);
        return queryParams.toString();
    };

    return {
        params,
        updateParams,
        getQueryString,
    };
};