import styles from "./TourPlanExplore.module.css";
import { BtnAddToBacket } from "../btnAddToBacket";

export const TourPlanExplore = ({ packageData }) => {
    const tourPlan = packageData.tourPlan || [];

    return (
        <div className={styles.basic_padding}>
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
            <BtnAddToBacket packageData={packageData} />
        </div>
    );
};
