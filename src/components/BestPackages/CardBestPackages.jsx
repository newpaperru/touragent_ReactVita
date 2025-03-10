import styles from "./CardBestPackages.module.css";

export const CardBestPackages = ({ imgURL, price }) => {
    return (
        <div className={styles.card}>
            <img src={imgURL} alt="изображение города" />
            <span className={styles.price}>${price}</span>
        </div>
    );
};
