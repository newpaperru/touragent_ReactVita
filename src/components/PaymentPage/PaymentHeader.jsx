import { useBookingData } from "../HostelRoomPage/customHooks/useBookingData";
import styles from "../HostelRoomPage/HosteRoom.module.css";

export const PaymentHeader = ({ header_data, isFixed, searchParams }) => {
    // Используем переданные параметры или читаем из URL
    const { dateRange, totalGuests } = useBookingData(searchParams);

    return (
        <div className={`${styles.header} ${
            isFixed ? `${styles.fixed} ${styles.visible}` : ''
        }`}>
            <span className={styles.name_hostel}>{header_data}</span>
            <div className={styles.info_user_chose}>
                <span className={styles.user_date}>{dateRange}</span>
                <span className={styles.user_count}>Guests: {totalGuests}</span>
            </div>
        </div>
    );
};