import styles from "./BestPackages.module.css";
import londonBPImg from "/londonBP.png";
import secondBPImg from "/secondBP.png";
import thirdBPImg from "/thirdBP.png";
import fourBPImg from "/fourBP.png";
import { CardBestPackages } from "./CardBestPackages";
import { Link } from "react-router-dom";

const cards = [
    { id: 1, imgURl: londonBPImg, price: "700" },
    { id: 2, imgURl: secondBPImg, price: "800" },
    { id: 3, imgURl: thirdBPImg, price: "500" },
    { id: 4, imgURl: fourBPImg, price: "400" },
];

export const BestPackages = () => {
    return (
        <section className={styles.best_packages}>
            <div className={styles.container}>
                <div className={styles.inner}>
                    <span className={styles.subtitle}>Promotion</span>
                    <span className={styles.title}>
                        We Provide You Best <br /> Europe Sightseeing Tours
                    </span>
                    <p className={styles.text}>
                        Et labore harum non nobis ipsum eum molestias mollitia
                        et corporis praesentium a laudantium internos. Non quis
                        eius quo eligendi corrupti et fugiat nulla qui soluta
                        recusandae in maxime quasi aut ducimus illum aut optio
                        quibusdam!
                    </p>
                    <Link to={"/search"} className={styles.btn}>
                        View Packages
                    </Link>
                    <div className={styles.list}>
                        {cards.map((item) => (
                            <CardBestPackages
                                key={item.id}
                                imgURL={item.imgURl}
                                price={item.price}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
