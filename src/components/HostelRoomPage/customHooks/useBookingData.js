import { useSearchParams } from "react-router-dom";

// Константы
const DEFAULT_ADULTS = 1;
const DEFAULT_CHILDREN = 0;
const DEFAULT_DATE_TEXT = "Select dates";
const MONTH_FORMAT_OPTIONS = { month: "short" };

export const useBookingData = () => {
    const [searchParams] = useSearchParams();

    // Получение параметров из URL
    const getDateParam = (paramName) => {
        const paramValue = searchParams.get(paramName);
        return paramValue ? new Date(paramValue) : null;
    };

    const getNumericParam = (paramName, defaultValue) => {
        const paramValue = searchParams.get(paramName);
        return paramValue ? parseInt(paramValue) : defaultValue;
    };

    const startDate = getDateParam("startDate");
    const endDate = getDateParam("endDate");
    const adults = getNumericParam("adults", DEFAULT_ADULTS);
    const children = getNumericParam("children", DEFAULT_CHILDREN);

    // Форматирование диапазона дат
    const formatDateRange = () => {
        if (!startDate || !endDate) return DEFAULT_DATE_TEXT;

        const startDay = startDate.getDate();
        const endDay = endDate.getDate();
        const startMonth = startDate.toLocaleString("default", MONTH_FORMAT_OPTIONS);
        const endMonth = endDate.toLocaleString("default", MONTH_FORMAT_OPTIONS);

        return startDate.getMonth() === endDate.getMonth()
            ? `${startDay}-${endDay} ${startMonth}`
            : `${startDay}-${endDay} ${startMonth}-${endMonth}`;
    };

    const totalGuests = adults + children;

    return {
        dateRange: formatDateRange(),
        totalGuests: totalGuests,
        bookingParams: {
            startDate,
            endDate,
            adults,
            children
        },
        hasBookingParams: Boolean(startDate && endDate)
    };
};