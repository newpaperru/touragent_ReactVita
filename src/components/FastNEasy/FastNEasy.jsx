import styles from './FastNEasy.module.css';
import { ResortBookingInfo } from './ResortBookingInfo';
import { TripCard } from './TripCard/TripCard';

export const FastNEasy = () => {
    return (
        <section className={styles.fastNEasy}>
            <div className={styles.container}>
                <ResortBookingInfo />
                <TripCard />
            </div>
        </section>
    )
}