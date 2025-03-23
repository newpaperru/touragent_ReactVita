import styles from './BookingSteps.module.css';
import chooseDestinationIcon from '/chooseDestination.svg';
import taxiTransportIcon from '/taxiTransport.svg';
import waterSportIcon from '/waterSport.svg'

export const BookingSteps = () => {
    return (
        <ul className={styles.list}>
            <li className={styles.element}>
                <div className={styles.icon}>
                    <img src={chooseDestinationIcon} alt="иконка" />
                </div>
                <div className={styles.text_wrap}>
                    <span className={styles.title}>Choose Destination</span>
                    <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. Urna, tortor tempus. </p>
                </div>
            </li>
            <li className={styles.element}>
                <div className={styles.icon}>
                    <img src={waterSportIcon} alt="иконка" />
                </div>
                <div className={styles.text_wrap}>
                    <span className={styles.title}>Check Availability</span>
                    <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. Urna, tortor tempus. </p>
                </div>
            </li>
            <li className={styles.element}>
                <div className={styles.icon}>
                    <img src={taxiTransportIcon} alt="иконка" />
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