import styles from './FastNEasy.module.css';
import { ResortBookingInfo } from './ResortBookingInfo/ResortBookingInfo';
import { TripCard } from './TripCard/TripCard';

export const FastNEasy = () => {
    return (
        <section className={styles.fast_n_easy}>
            <div className={styles.container}>
                <ResortBookingInfo />
                <TripCard />
            </div>
        </section>
    )
}