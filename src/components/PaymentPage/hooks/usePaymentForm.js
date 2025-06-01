import { useEffect, useCallback, useRef } from "react";
import { useForm } from "react-hook-form";

export const usePaymentForm = (defaultFormValues, paymentDetails, hostelData) => {
    const prevValuesRef = useRef();
    const formMethods = useForm({
        mode: "onChange",
        defaultValues: defaultFormValues || {}
    });
    
    const { reset, register, handleSubmit, formState: { errors, isValid } } = formMethods;

    // Сравнение объектов через JSON.stringify
    const areValuesEqual = useCallback((a, b) => {
        return JSON.stringify(a) === JSON.stringify(b);
    }, []);

    useEffect(() => {
        if (!areValuesEqual(prevValuesRef.current, defaultFormValues)) {
            reset(defaultFormValues || {});
            prevValuesRef.current = defaultFormValues;
        }
    }, [defaultFormValues, reset, areValuesEqual]);

    const onSubmit = useCallback((data) => {
        if (!hostelData || !paymentDetails) return;

        const totalCost = paymentDetails.cityPrice + 
                         paymentDetails.totalGuests * hostelData.room.cost;

        const paymentData = {
            user: data,
            booking: {
                ...paymentDetails,
                hostelTitle: hostelData.hostel.title,
                roomTitle: hostelData.room.title,
                price: hostelData.room.cost,
                breakfastIncluded: hostelData.room.breakfast,
                address: hostelData.room.hostelAddress,
                prepaymentPolicy: hostelData.room.returnPrepayment 
                    ? "refundable" 
                    : "non-refundable",
                comment: data.comment,
                totalCost
            },
            totalAmount: totalCost
        };

        localStorage.setItem("paymentData", JSON.stringify(paymentData));
        return paymentData;
    }, [hostelData, paymentDetails]);

    return {
        register,
        handleSubmit: handleSubmit(onSubmit),
        errors,
        isValid,
        formMethods 
    };
};