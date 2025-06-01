import { PackagesCard } from "../../SearchPage/PackagesData/PackagesList/PackagesCard";
import styles from "../Admin.module.css";

export const CurrentTours = ({ tours, removeTour }) => (
    <div className={styles.section}>
        <h2 className={styles.subtitle}>Current Tours</h2>
        <div className={styles.grid}>
            {tours.map((tour, index) => (
                <PackagesCard
                    key={index}
                    data={tour}
                    isAdmin={true}
                    onDelete={removeTour}
                />
            ))}
        </div>
    </div>
);
