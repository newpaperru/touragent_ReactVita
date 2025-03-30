import { BookingSteps } from "./BookingSteps";
import styles from "./ResortBookingInfo.module.css";

export const ResortBookingInfo = () => {
    return (
        <div>
            <span className={styles.subtitle}>Fast & Easy</span>
            <span className={styles.title}>Get Your Favourite <br />
            Resort Bookings</span>
            <BookingSteps />
        </div>
    )
}