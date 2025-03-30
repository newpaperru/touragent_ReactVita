import styles from "./ExploreBlock.module.css";
import { Link } from "react-router-dom";

export const ExploreBlock = ({ imgUrl, text }) => {
    return (
        <article className={styles.wrap}>
            <img src={imgUrl} alt="задний фон" className={styles.img_block} />
            <div className={styles.bg_filter}>
                <span className={styles.subtitle}>Promotion</span>
                <h2 className={styles.title}>{text}</h2>
                <Link to={"/search"} className={styles.btn}>
                    View Packages
                </Link>
            </div>
        </article>
    );
};
