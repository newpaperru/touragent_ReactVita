import styles from "./FooterLinks.module.css";

export const FooterLinks = () => {
    return (
        <div className={styles.footer_links}>
            <span className={styles.title}>Company</span>
            <span className={styles.title}>Destinations</span>
            <div>
                <a href="#" className={styles.link}>
                    <span className={styles.text}>About Us</span>
                </a>
            </div>
            <div>
                <a href="#" className={styles.link}>
                    <span className={styles.text}>Maldives</span>
                </a>
            </div>
            <div>
                <a href="#" className={styles.link}>
                    <span className={styles.text}>Careers</span>
                </a>
            </div>
            <div>
                <a href="#" className={styles.link}>
                    <span className={styles.text}>
                        Los Angelas
                    </span>
                </a>
            </div>
            <div>
                <a href="#" className={styles.link}>
                    <span className={styles.text}>Blog</span>
                </a>
            </div>
            <div>
                <a href="#" className={styles.link}>
                    <span className={styles.text}>Las Vegas</span>
                </a>
            </div>
            <div>
                <a href="#" className={styles.link}>
                    <span className={styles.text}>Pricing</span>
                </a>
            </div>
            <div>
                <a href="#" className={styles.link}>
                    <span className={styles.text}>Torronto</span>
                </a>
            </div>
        </div>
    );
};
