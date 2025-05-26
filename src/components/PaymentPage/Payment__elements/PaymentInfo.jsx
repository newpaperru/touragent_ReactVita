import styles from "../Payment.module.css";
import Map_marker from "../../../assets/Icons/map-marker.svg?react";

export const PaymentInfo = ({ hostelData }) => {
    return (
        <>
            <h1 className={styles.name}>{hostelData.hostel.title}</h1>
            <div className={styles.block_reviews}>
                <div className={styles.score_reviews}>
                    {hostelData.hostel.scoreReviews}
                </div>
                <span>{hostelData.hostel.scoreInText}</span>
            </div>
            <div className={styles.beds}>{hostelData.room.title}</div>
            <div className={styles.booking_policy}>
                {hostelData.room.breakfast ? (
                    <span>Breakfast is included for 1 guest</span>
                ) : (
                    <span>Breakfast is not included for 1 guest</span>
                )}
                {hostelData.room.returnPrepayment ? (
                    <span>Payment is refundable</span>
                ) : (
                    <span>Payment is not refundable</span>
                )}
            </div>
            <div className={styles.place_info}>
                <Map_marker />
                <p className={styles.address}>{hostelData.hostel.address}</p>
            </div>
        </>
    );
};