import styles from "./Profile.module.css";
import { ProfileCard } from "./ProfileCard";

export const Profile = () => {
    return (
        <section className={styles.profile}>
            <h1 className={styles.title}>Profile</h1>
            <ProfileCard />
        </section>
    );
};
