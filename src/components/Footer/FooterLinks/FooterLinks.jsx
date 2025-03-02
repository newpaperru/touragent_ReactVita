import styles from "./FooterLinks.module.css";

export const FooterLinks = () => {
    return (
        <div className={styles.footer_links}>
            <span className={styles.footer_links__title}>Company</span>
            <span className={styles.footer_links__title}>Destinations</span>
            <div>
                <a href="#" className={styles.footer_links__link}>
                    <span className={styles.footer_links__text}>About Us</span>
                </a>
            </div>
            <div>
                <a href="#" className={styles.footer_links__link}>
                    <span className={styles.footer_links__text}>Maldives</span>
                </a>
            </div>
            <div>
                <a href="#" className={styles.footer_links__link}>
                    <span className={styles.footer_links__text}>Careers</span>
                </a>
            </div>
            <div>
                <a href="#" className={styles.footer_links__link}>
                    <span className={styles.footer_links__text}>
                        Los Angelas
                    </span>
                </a>
            </div>
            <div>
                <a href="#" className={styles.footer_links__link}>
                    <span className={styles.footer_links__text}>Blog</span>
                </a>
            </div>
            <div>
                <a href="#" className={styles.footer_links__link}>
                    <span className={styles.footer_links__text}>Las Vegas</span>
                </a>
            </div>
            <div>
                <a href="#" className={styles.footer_links__link}>
                    <span className={styles.footer_links__text}>Pricing</span>
                </a>
            </div>
            <div>
                <a href="#" className={styles.footer_links__link}>
                    <span className={styles.footer_links__text}>Torronto</span>
                </a>
            </div>
        </div>
    );
};
