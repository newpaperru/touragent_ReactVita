import { useEffect, useCallback, useRef } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const usePaymentForm = (defaultFormValues, paymentDetails, hostelData) => {
    const navigate = useNavigate();
    const prevValuesRef = useRef();
    
    const { reset, register, handleSubmit, formState: { errors, isValid } } = useForm({
        mode: "onChange",
        defaultValues: defaultFormValues || {}
    });

    // Сравнение объектов через JSON.stringify
    const areValuesEqual = (a, b) => {
        return JSON.stringify(a) === JSON.stringify(b);
    };

    useEffect(() => {
        if (!areValuesEqual(prevValuesRef.current, defaultFormValues)) {
            reset(defaultFormValues || {});
            prevValuesRef.current = defaultFormValues;
        }
    }, [defaultFormValues, reset]);

    const onSubmit = useCallback((data) => {
        if (!hostelData || !paymentDetails) return;

        const totalGuests = paymentDetails.totalGuests;
        const roomCost = hostelData.room.cost;
        const cityPrice = paymentDetails.cityPrice;
        const totalCost = cityPrice + totalGuests * roomCost;

        const paymentData = {
            user: data,
            booking: {
                hostelId: paymentDetails.hostelId,
                roomId: paymentDetails.roomId,
                hostelTitle: hostelData.hostel.title,
                roomTitle: hostelData.room.title,
                price: roomCost,
                breakfastIncluded: hostelData.room.breakfast,
                prepaymentPolicy: hostelData.room.returnPrepayment 
                    ? "refundable" 
                    : "non-refundable",
                comment: data.comment,
                totalGuests,
                cityPrice,
                totalCost
            },
            totalAmount: totalCost
        };

        localStorage.setItem("paymentData", JSON.stringify(paymentData));
        navigate("/payment/confirm");
    }, [hostelData, paymentDetails, navigate]);

    return {
        register,
        handleSubmit: handleSubmit(onSubmit),
        errors,
        isValid
    };
};