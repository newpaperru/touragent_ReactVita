import styles from "./TrendingCard.module.css";
import calender from "/calender.svg";
import userAvatar from "/user-avatar-outline.svg";
import star from "/star-fill.svg";
import location from "/location.svg";
import "../../../css/font-style.css";

export const TrendingCard = ({
    imgURL,
    iconURL,
    countDays,
    countPeople,
    discount,
    title,
    place,
    price,
    description,
}) => {
    const stars = Array(5).fill(0);
    const discountedPrice = discount ? price - price * discount : price;

    const handlingCountPeople = (countPeople) => {
        const parsedCount = parseInt(countPeople, 10);
        if (isNaN(parsedCount)) return countPeople;

        if (parsedCount >= 10000 && parsedCount <= 999999) {
            return `${(parsedCount / 1000).toFixed(1)}k`;
        }
        if (parsedCount >= 1000000) {
            return `${(parsedCount / 1000000).toFixed(1)}m`;
        }

        return parsedCount;
    };

    return (
        <div className={styles.card}>
            <div className={styles.img_wrap}>
                <img
                    src={imgURL}
                    alt="изображения места"
                    className={styles.img}
                />
                <img src={iconURL} alt="иконка места" className={styles.icon} />
            </div>
            <div className={styles.container}>
                <div className={styles.data}>
                    <div className={styles.days_wrap}>
                        <img src={calender} alt="иконка календаря" />
                        <span className={styles.days}>{countDays} Days</span>
                    </div>
                    <div className={styles.people_wrap}>
                        <img src={userAvatar} alt="иконка аватар" />
                        <span className={styles.people}>
                            {handlingCountPeople(countPeople)} people going
                        </span>
                    </div>
                </div>
                <div className={styles.info}>
                    <h3 className={styles.country_name}>{title}</h3>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        {stars.map((_, index) => (
                            <img src={star} key={index} alt="иконка звезды" />
                        ))}
                    </div>
                </div>
                <div className={styles.place_wrap}>
                    <img src={location} alt="иконка места" />
                    <span className={styles.name_place}>{place}</span>
                </div>
                <div className={styles.price_wrap}>
                    {discount ? (
                        <>
                            <span
                                className={styles.discount}
                                style={{ marginRight: 19 }}
                            >
                                {Math.round(discountedPrice)} $
                            </span>
                            <span className={styles.price_line_through}>
                                {price} $
                            </span>
                        </>
                    ) : (
                        <span className={styles.price}>{price} $</span>
                    )}
                </div>
                <p className={styles.description}>{description}</p>
                <button className={styles.btn}>Explore Now</button>
            </div>
        </div>
    );
};
