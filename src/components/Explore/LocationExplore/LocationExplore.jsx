import { useTickets } from "../../ProfilePage/Profile/useTickets";
import styles from "./LocationExplore.module.css";
import { useState } from "react";

export const LocationExplore = ({ packageData }) => {
    const { addTicket, isTourInCart, goToProfile } = useTickets();
    const [isAdded, setIsAdded] = useState(false);

    const handleButtonClick = () => {
        if (!isTourInCart(packageData)) {
            addTicket(packageData);
            setIsAdded(true);
        }
        goToProfile();
    };

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
            <button className={styles.btn} onClick={handleButtonClick}>
                {isAdded || isTourInCart(packageData)
                    ? "Go to the basket"
                    : "Book Now"}
            </button>
        </div>
    );
};
