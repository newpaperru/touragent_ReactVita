import styles from "./TripCard.module.css";
import bigImg from "/hawaiiTripCard.png";
import airplane from "/airplane.png";
import building from "/building.svg";
import leaf from "/leaf.svg";
import map from "/map.svg";
import send from "/send.svg";

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
                    <img src={leaf} alt="иконка листа" />
                </div>
                <div className={styles.icon}>
                    <img src={map} alt="иконка карты" />
                </div>
                <div className={styles.icon}>
                    <img src={send} alt="иконка отправки" />
                </div>
            </div>
            <div className={styles.count_wrap}>
                <img src={building} alt="иконка здания" />
                <span className={styles.count_people}>
                    60 people are interested
                </span>
            </div>
            <img
                src={airplane}
                alt="изображение самолета"
                className={styles.bgImg}
            />
        </div>
    );
};
