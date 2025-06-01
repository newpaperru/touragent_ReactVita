import { useNavigate } from "react-router-dom";
import { useTickets } from "../../ProfilePage/Profile/useTickets";
import { preparePaymentData, prepareTicketData } from "./paymentUtils";

export const usePaymentSubmission = () => {
    const navigate = useNavigate();
    const { addTicket } = useTickets();

    const submitPayment = (formData, paymentDetails, hostelData) => {
        const paymentData = preparePaymentData(formData, paymentDetails, hostelData);
        if (!paymentData) return;

        // Добавляем dateRange и totalGuests из formData
        const ticketData = prepareTicketData(
            hostelData,
            paymentData,
            "Paid",
            formData.dateRange,
            formData.totalGuests
        );

        addTicket(ticketData);
        localStorage.setItem("paymentData", JSON.stringify(paymentData));
        navigate("/profile");
    };

    return { submitPayment };
};