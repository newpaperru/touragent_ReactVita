import styles from "../HosteRoom.module.css";
import { useSearchParams } from "react-router-dom";

export const HeaderHostelRoom = ({ header_data }) => {
    const [searchParams] = useSearchParams();

    const startDate = searchParams.get("startDate")
        ? new Date(searchParams.get("startDate"))
        : null;
    const endDate = searchParams.get("endDate")
        ? new Date(searchParams.get("endDate"))
        : null;
    const adults = parseInt(searchParams.get("adults")) || 1;
    const children = parseInt(searchParams.get("children")) || 0;

    const formatDateRange = () => {
        if (!startDate || !endDate) return "Select dates";

        const startDay = startDate.getDate();
        const endDay = endDate.getDate();
        const startMonth = startDate.toLocaleString("default", {
            month: "short",
        });
        const endMonth = endDate.toLocaleString("default", { month: "short" });

        if (startDate.getMonth() === endDate.getMonth()) {
            return `${startDay}-${endDay} ${startMonth}`;
        } else {
            return `${startDay}-${endDay} ${startMonth}-${endMonth}`;
        }
    };

    const totalGuests = adults + children;

    return (
        <div className={styles.header}>
            <span className={styles.name_hostel}>{header_data}</span>
            <div className={styles.info_user_chose}>
                <span className={styles.user_date}>{formatDateRange()}</span>
                <span className={styles.user_count}>Гостей: {totalGuests}</span>
            </div>
        </div>
    );
};
