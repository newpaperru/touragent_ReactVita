import { DataCircle } from "./DataCircle";
import styles from "./PopularTour.module.css";
import popularImg from "/OurPopularTourBigImg.png";

export const PopularTour = () => {
    return (
        <section className={styles.popular_tour}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <img src={popularImg} alt="Image of a popular tour" />
                    <div className={styles.info}>
                        <span className={styles.subtitle}>Trend</span>
                        <span className={styles.title}>
                            Our Popular Tour Plans
                        </span>
                        <p className={styles.description}>
                            Et labore harum non nobis ipsum eum molestias
                            mollitia et corporis praesentium a laudantium. Et
                            labore harum non nobis ipsum eum molestias mollitia
                            et corporis praesentium a laudantium.
                        </p>
                        <DataCircle />
                    </div>
                </div>
            </div>
        </section>
    );
};
