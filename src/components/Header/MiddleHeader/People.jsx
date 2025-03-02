import styles from "./People.module.css";
import peopleImg from '/people.png';


export const People = () => {
    return (
        <div className={styles.people__container}>
            <img src={peopleImg} alt="Люди" />
            <span className={styles.people__text}>2,500 people booked Tommorowland Event in last 24 hours</span>
        </div>
    )
}