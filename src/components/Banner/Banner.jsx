import styles from "./Banner.module.css";

export const Banner = () => {
    return (
        <div className={styles.banner}>
            <span className={styles.text}>Let’s make your <br/> next holiday amazing</span>
        </div>
    );
};
