import styles from './ExploreBlock.module.css';

export const ExploreBlock = ({imgUrl, text}) => {
    return (
        <div className={styles.wrap}>
            <img src={imgUrl} alt="задний фон" className={styles.imgBlock} />
            <div className={styles.bgFilter}>
                <span className={styles.subtitle}>Promotion</span>
                <span className={styles.title}>{text}</span>
                <button className={styles.btn}>View Packages</button>
            </div>
        </div>
    )
}