import { Link } from "react-router-dom";
import styles from "./LocationExplore.module.css";
// import { BtnAddToBacket } from "../btnAddToBacket";

export const LocationExplore = ({ packageData }) => {
    return (
        <div className={styles.basic_padding}>
            <span className={styles.title}>Location</span>
            <div className={styles.map_container}>
                <img
                    src={packageData.map}
                    alt={`Map of ${packageData.country}`}
                    className={styles.image}
                />
            </div>
            <div className={styles.description_container}>
                {packageData.locationDescription.map((paragraph, index) => (
                    <p key={`desc-${index}`} className={styles.description}>
                        {paragraph}
                    </p>
                ))}
            </div>
            <Link
                to={`/explore/${packageData.id}/hostels`}
                className={`${styles.btn} ${styles.hostels_btn}`}
            >Go to selection of hotels</Link>
            {/* <BtnAddToBacket packageData={packageData} /> */}
        </div>
    );
};
