import { Circle } from "./Circle";
import styles from "./DataCircle.module.css";

export const DataCircle = () => {
    return (
        <div className={styles.data_circle}>
            <Circle percent={78} size={150} strokeWidth={15} gradientId="g1" text="Vacations"/>
            <Circle percent={55} size={150} strokeWidth={15} gradientId="g2" text="Honeymoon"/>
            <Circle percent={30} size={150} strokeWidth={15} gradientId="g3" text="Musical Events"/>
        </div>
    );
};
