import styles from "./InformationExplore.module.css";

export const ServiceList = ({ items, Icon, title, isIncluded }) => {
    return (
        <div className={isIncluded ? styles.included : styles.not_included}>
            <span className={styles.title}>{title}</span>
            <div className={styles.list}>
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={`${styles.value} ${styles.item}`}
                    >
                        <Icon />
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
};
