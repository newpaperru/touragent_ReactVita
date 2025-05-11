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
            {/* <BtnAddToBacket packageData={packageData} /> */}
        </div>
    );
};
