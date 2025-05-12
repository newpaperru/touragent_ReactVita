import { Link } from "react-router-dom";
import styles from "./Hostel.module.css";

export const Hostel = ({ hostelData }) => {
    return (
        <Link to={`/hostels/${hostelData.id}`}>
            <div className={styles.hostel}>
                <img
                    src={hostelData.hostelImg}
                    alt={hostelData.hostelTitle}
                    className={styles.img}
                />
                <div className={styles.info}>
                    <span className={styles.title}>
                        {hostelData.hostelTitle}
                    </span>
                    <span className={styles.cost}>
                        {hostelData.hostelCost}$ / per 1 night
                    </span>
                </div>
            </div>
        </Link>
    );
};
