import styles from "../AddTourForm.module.css";
import { ArrayInput } from "./ArrayInput";

export const DayPlanInput = ({
    dayPlan,
    setDayPlan,
    onAddListItem,
    listItem,
    setListItem,
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
            <ArrayInput
                label="Activity Items"
                value={listItem}
                setValue={setListItem}
                onAdd={onAddListItem}
                items={dayPlan.listItems}
                placeholder="Add activity item"
            />
        </>
    );
};
