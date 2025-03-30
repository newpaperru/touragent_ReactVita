import styles from "./FilterPattern.module.css";

export const FilterPattern = ({ children }) => {
    return (
        <div className={styles.filter_pattern}>
            <div className={styles.filter}>{children}</div>
        </div>
    );
};
