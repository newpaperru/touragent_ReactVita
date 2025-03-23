import styles from "./CardGallery.module.css"

export const CardGallery = ({imgURL, classes, country, price}) => {
    return (
        <div className={`${styles.wrapper} ${classes}`}>
            <img src={imgURL} alt="Illustration packages" className={styles.image}/>
            <div className={styles.filter}>
                <div className={styles.text_wrap}>
                    <span className={styles.country}>{country}</span>
                    <span className={styles.price}>{price}</span>
                </div>
            </div>
        </div>
    )
}