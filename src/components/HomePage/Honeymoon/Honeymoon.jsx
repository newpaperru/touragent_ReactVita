import styles from "./Honeymoon.module.css";
import honeymoonImg from "/honeymoon.png";

import { Link } from "react-router-dom";

export const Honeymoon = () => {
    return (
        <section className={styles.honeymoon}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.img_wrap}>
                        <img
                            src={honeymoonImg}
                            alt="honeymoon img"
                            className={styles.img}
                        />
                    </div>
                    <div className={styles.text_wrap}>
                        <span className={styles.subtitle}>
                            Honeymoon Specials
                        </span>
                        <span className={styles.title}>
                            Our Romantic Tropical <br /> Destinations
                        </span>
                        <p className={styles.description}>
                            Et labore harum non nobis ipsum eum molestias
                            mollitia et corporis praesentium a laudantium
                            internos. Non quis eius quo eligendi corrupti et
                            fugiat nulla qui soluta recusandae in maxime quasi
                            aut ducimus illum aut optio quibusdam!
                        </p>
                        <Link to={"/search"} className={styles.btn}>
                            View Packages
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};
