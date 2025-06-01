export const prepareTicketData = (
    hostelData,
    paymentData,
    status = "Not paid",
    dateRange,
    totalGuests,
    userId,
) => {
    return {
        country: hostelData.country,
        price: paymentData.totalAmount,
        status,
        date: new Date().toISOString().split("T")[0],
        userId,
        paymentData: {
            ...paymentData,
            booking: {
                ...paymentData.booking,
                ...(dateRange ? { dateRange } : {}),
                ...(totalGuests ? { totalGuests } : {})
            }
        },
        ...(dateRange ? { dateRange } : {}),
        ...(totalGuests ? { totalGuests } : {})
    };
};

export const preparePaymentData = (formData, paymentDetails, hostelData) => {
    if (!hostelData || !paymentDetails) return null;

    const totalCost =
        paymentDetails.cityPrice + paymentDetails.totalGuests * hostelData.room.cost;

    return {
        user: formData,
        booking: {
            ...paymentDetails,
            country: hostelData.country,
            hostelTitle: hostelData.hostel.title,
            roomTitle: hostelData.room.title,
            price: hostelData.room.cost,
            breakfastIncluded: hostelData.room.breakfast,
            address: hostelData.hostel.address,
            prepaymentPolicy: hostelData.room.returnPrepayment
                ? "refundable"
                : "non-refundable",
            comment: formData.comment,
            totalCost
        },
        totalAmount: totalCost
    };
};