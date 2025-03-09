import styles from "./CategoryCard.module.css";

export const CategoryCard = ({ img, title, text }) => {
    return (
        <div className={styles.card}>
            <img src={img} alt="картинка" className={styles.img} />
            <div className={styles.wrap_text}>
                <span className={styles.title}>{title}</span>
                <p className={styles.text}>{text}</p>
            </div>
        </div>
    );
};
