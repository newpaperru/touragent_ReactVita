import styles from "./InformationExplore.module.css";

export const RatingStars = ({ rating, reviewCount }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
        <div className={styles.stars}>
            <div>
                {[...Array(fullStars)].map((_, i) => (
                    <span key={`full-${i}`} className={styles.filled_star}>
                        ★
                    </span>
                ))}
                {hasHalfStar && (
                    <span key="half" className={styles.half_star}>
                        ★
                    </span>
                )}
                {[...Array(emptyStars)].map((_, i) => (
                    <span key={`empty-${i}`} className={styles.empty_star}>
                        ★
                    </span>
                ))}
            </div>
            <span className={styles.rating_text}>({reviewCount} review)</span>
        </div>
    );
};
