import styles from "../AddTourForm.module.css";
import { AutocompleteInput } from "./AutocompleteInput";

export const DayPlanInput = ({
    dayPlan,
    setDayPlan,
    onAddListItem,
    listItem,
    setListItem,
    activityOptions,
    onRemove,
}) => {
    return (
        <>
            <div className={styles.group}>
                <label>Day Number:</label>
                <input
                    type="text"
                    value={dayPlan.dayNumber}
                    onChange={(e) =>
                        setDayPlan({
                            ...dayPlan,
                            dayNumber: e.target.value,
                        })
                    }
                    placeholder="01"
                />
            </div>
            <div className={styles.group}>
                <label>Day Title:</label>
                <input
                    type="text"
                    value={dayPlan.day}
                    onChange={(e) =>
                        setDayPlan({ ...dayPlan, day: e.target.value })
                    }
                    placeholder="Arrival and City Tour"
                />
            </div>
            <div className={styles.group}>
                <label>Day Description:</label>
                <textarea
                    value={dayPlan.descriptionTour}
                    onChange={(e) =>
                        setDayPlan({
                            ...dayPlan,
                            descriptionTour: e.target.value,
                        })
                    }
                    placeholder="Detailed description of the day's activities"
                />
            </div>
            <div className={styles.group}>
                <label>Activity Items:</label>
                <AutocompleteInput
                    value={listItem}
                    onChange={(e) => setListItem(e.target.value)}
                    onAdd={onAddListItem}
                    placeholder="Add activity item"
                    options={activityOptions}
                />
                <ul className={styles.list}>
                    {dayPlan.listItems.map((item, index) => (
                        <li
                            key={`activity-${index}`}
                            className={styles.list_item}
                        >
                            {item}
                            <button
                                type="button"
                                onClick={() => onRemove(index)}
                                className={styles.remove_button}
                            >
                                ×
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};
