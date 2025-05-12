import { Hostel } from "./Hostel";
import styles from "./Hostels.module.css";

export const Hostels = ({ hostels }) => {
    return (
        <div className={styles.hostels}>
            <div className={styles.container}>
                {hostels.map((hostel) => (
                    <Hostel key={hostel.id} hostelData={hostel} />
                ))}
            </div>
        </div>
    );
};
