import styles from "./TripCard.module.css";
import bigImg from "/hawaiiTripCard.png";
import Building from "../../../../assets/Icons/building.svg?react";
import Leaf from "../../../../assets/Icons/leaf.svg?react";
import Map from "../../../../assets/Icons/map.svg?react";
import Send from "../../../../assets/Icons/send.svg?react";

export const TripCard = () => {
    return (
        <div className={styles.card}>
            <img src={bigImg} alt="гавайи" />
            <div className={styles.text}>
                <span className={styles.title}>Trip to Hawaii</span>
                <span className={styles.info}>14-29 June | by JR Martinax</span>
            </div>
            <div className={styles.icons}>
                <div className={styles.icon}>
                    <Leaf />
                </div>
                <div className={styles.icon}>
                    <Map />
                </div>
                <div className={styles.icon}>
                    <Send />
                </div>
            </div>
            <div className={styles.count_wrap}>
                <Building />
                <span className={styles.count_people}>
                    60 people are interested
                </span>
            </div>
        </div>
    );
};
