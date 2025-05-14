import Icon_recomm from "../../../assets/Icons/icon_recomm.svg?react";
import styles from "../HostelInfo.module.css";

export const RecommendBadge = () => {
    return (
        <div className={styles.block_recomm}>
            <div className={styles.block_inner}>
                <Icon_recomm /> We recommend
            </div>
        </div>
    );
};
