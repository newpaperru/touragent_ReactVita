import { useTickets } from "../../ProfilePage/Profile/useTickets";
import styles from "./TourPlanExplore.module.css";
import { useState } from "react";

export const TourPlanExplore = ({ packageData }) => {
    const tourPlan = packageData.tourPlan || [];
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
        <div className={styles.tour_plan_explore}>
            <span className={styles.title}>Tour Plan</span>
            <div className={styles.timeline}>
                {tourPlan.map((day, index) => (
                    <div key={index} className={styles.day}>
                        <div className={styles.day_number}>{day.dayNumber}</div>
                        <span className={styles.day_title}>{day.day}</span>
                        <p className={styles.description}>
                            {day.descriptionTour}
                        </p>

                        {day.listItems && day.listItems.length > 0 && (
                            <ul className={styles.items}>
                                {day.listItems.map((item, itemIndex) => (
                                    <li
                                        key={`item-${itemIndex}`}
                                        className={styles.item}
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
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
