import styles from "./Profile.module.css";
import { ProfileCard } from "./ProfileCard";
import { TicketCard } from "./TicketCard";

export const Profile = () => {
    return (
        <section className={styles.profile}>
            <span className={styles.title}>Profile</span>
            <ProfileCard />
            <span className={styles.title}>Your Ticket</span>
            <TicketCard />
        </section>
    );
};
