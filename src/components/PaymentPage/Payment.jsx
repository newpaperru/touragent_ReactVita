import { useParams } from "react-router-dom";
import styles from "./Payment.module.css";
import { usePaymentData } from "./hooks/usePaymentData";
import { usePaymentForm } from "./hooks/usePaymentForm";
import { PaymentInfo } from "./Payment__elements/PaymentInfo";
import { GuestInfoForm } from "./Payment__elements/GuestInfoForm";
import { CommentSection } from "./Payment__elements/CommentSection";
import { PaymentSection } from "./Payment__elements/PaymentSection";
import { usePaymentSubmission } from "./hooks/usePaymentSubmission";
import { useBookingData } from "../HostelRoomPage/customHooks/useBookingData";

export const Payment = () => {
    const { hostelId, roomId } = useParams();
    const { dateRange, totalGuests, bookingParams } = useBookingData();
    const { startDate, endDate } = bookingParams;

    const {
        hostelData,
        error,
        totalCost,
        isRefundable,
        defaultFormValues,
        paymentDetails,
    } = usePaymentData(hostelId, roomId);

    const { register, errors, isValid, formMethods } = usePaymentForm(
        defaultFormValues,
        paymentDetails,
        hostelData
    );

    const { submitPayment } = usePaymentSubmission();

    const onSubmit = (data) => {
        const fullData = {
            ...data,
            startDate,
            endDate,
            totalGuests,
            dateRange,
        };

        submitPayment(fullData, paymentDetails, hostelData);
    };

    if (error) return <div>Error: {error}</div>;
    if (!hostelData) return <div>Loading...</div>;

    return (
        <div className={styles.payment}>
            <PaymentInfo hostelData={hostelData} />

            <form
                onSubmit={formMethods.handleSubmit(onSubmit)}
                className={styles.booking_form}
            >
                <GuestInfoForm
                    register={register}
                    errors={errors}
                    defaultValues={defaultFormValues}
                />
                <CommentSection register={register} />
                <PaymentSection
                    isValid={isValid}
                    totalCost={totalCost}
                    isRefundable={isRefundable}
                />
            </form>
        </div>
    );
};
