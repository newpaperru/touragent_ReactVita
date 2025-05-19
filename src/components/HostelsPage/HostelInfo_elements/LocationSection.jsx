import Map_marker from "../../../assets/Icons/map-marker.svg?react";
import styles from "../HostelInfo.module.css";

export const LocationSection = ({ address }) => {
    return (
        <div className={styles.place}>
            <span className={styles.title}>Where is it?</span>
            <div className={styles.place_info}>
                <Map_marker />
                <p className={styles.address}>{address}</p>
            </div>
        </div>
    );
};
