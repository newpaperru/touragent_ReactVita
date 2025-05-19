import styles from "../HosteRoom.module.css";
import { useBookingData } from "../customHooks/useBookingData";

export const HeaderHostelRoom = ({ header_data }) => {
    const { dateRange, totalGuests} = useBookingData();

    return (
        <div className={styles.header}>
            <span className={styles.name_hostel}>{header_data}</span>
            <div className={styles.info_user_chose}>
                <span className={styles.user_date}>{dateRange}</span>
                <span className={styles.user_count}>Гостей: {totalGuests}</span>
            </div>
        </div>
    );
};