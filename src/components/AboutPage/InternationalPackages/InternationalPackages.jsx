import { GalleryInternational } from "./GalleryInternational";
import styles from "./InternationalPackages.module.css";

export const InternationalPackages = () => {
    return (
        <section className={styles.international_packages}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <span className={styles.subtitle}>Explore more</span>
                    <span className={styles.title}>Our International Packages</span>
                    <GalleryInternational />
                </div>
            </div>
        </section>
    );
};
