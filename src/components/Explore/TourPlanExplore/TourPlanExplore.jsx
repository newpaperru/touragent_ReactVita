import styles from "./TourPlanExplore.module.css";

export const TourPlanExplore = ({ packageData }) => {
    const tourPlan = packageData.tourPlan || [];

    return (
        <div className={styles.tour_plan_explore}>
            <h2 className={styles.title}>Tour Plan</h2>
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
            <button className={styles.btn}>Book Now</button>
        </div>
    );
};
