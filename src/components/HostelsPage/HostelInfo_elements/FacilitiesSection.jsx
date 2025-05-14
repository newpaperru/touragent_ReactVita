import styles from "../HostelInfo.module.css";

export const FacilitiesSection = ({ facilities }) => {
    return (
        <div className={styles.facilities}>
            <span className={styles.title}>Facilities and services</span>
            {facilities.map((item, index) => (
                <div key={index} className={styles.facility}>
                    <img src={item.icon} alt={item.text} />
                    <span className={styles.facilities_text}>{item.text}</span>
                </div>
            ))}
        </div>
    );
};
