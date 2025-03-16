import styles from './ExploreBlock.module.css';

export const ExploreBlock = ({imgUrl, text}) => {
    return (
        <article className={styles.wrap}>
            <img src={imgUrl} alt="задний фон" className={styles.imgBlock} />
            <div className={styles.bgFilter}>
                <span className={styles.subtitle}>Promotion</span>
                <h2 className={styles.title}>{text}</h2>
                <button className={styles.btn}>View Packages</button>
            </div>
        </article>
    )
}