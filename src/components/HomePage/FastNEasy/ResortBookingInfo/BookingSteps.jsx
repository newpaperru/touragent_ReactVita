import styles from "./BookingSteps.module.css";
import ChooseDestinationIcon from "../../../../assets/Icons/chooseDestination.svg?react";
import TaxiTransportIcon from "../../../../assets/Icons/taxiTransport.svg?react";
import WaterSportIcon from "../../../../assets/Icons/waterSport.svg?react"

export const BookingSteps = () => {
    return (
        <ul className={styles.list}>
            <li className={styles.element}>
                <div className={styles.icon}>
                    <ChooseDestinationIcon />
                </div>
                <div className={styles.text_wrap}>
                    <span className={styles.title}>Choose Destination</span>
                    <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. Urna, tortor tempus. </p>
                </div>
            </li>
            <li className={styles.element}>
                <div className={styles.icon}>
                    <WaterSportIcon />
                </div>
                <div className={styles.text_wrap}>
                    <span className={styles.title}>Check Availability</span>
                    <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. Urna, tortor tempus. </p>
                </div>
            </li>
            <li className={styles.element}>
                <div className={styles.icon}>
                    <TaxiTransportIcon />
                </div>
                <div className={styles.text_wrap}>
                    <span className={styles.title}>Let’s Go</span>
                    <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. Urna, tortor tempus. </p>
                </div>
            </li>
        </ul>
    )
}