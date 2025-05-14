import Angle_right_b from "../../../assets/Icons/angle-right-b.svg?react";
import styles from "../HostelInfo.module.css";

export const ReviewsSection = ({ scoreReviews, countReviews }) => {
    return (
        <div className={styles.reviews}>
            <div className={styles.score_reviews}>{scoreReviews}</div>
            <div className={styles.reviews_text}>
                <span className={styles.count_rewiews}>
                    {countReviews} reviews
                </span>
                <Angle_right_b />
            </div>
        </div>
    );
};
