import styles from "../HostelInfo.module.css";

export const ProgressBars = ({ reviews_bars }) => {
    return (
        <div className={styles.progress_bars}>
            {reviews_bars.map((item, index) => {
                const percentNumber = parseInt(item.percent);
                let progressColor = "";

                if (percentNumber >= 76) progressColor = styles.green;
                else if (percentNumber >= 51) progressColor = styles.yellow;
                else if (percentNumber >= 26) progressColor = styles.orange;
                else progressColor = styles.red;

                return (
                    <div key={index} className={styles.progress_item}>
                        <div className={styles.progress_info}>
                            <span className={styles.progress_title}>
                                {item.title}
                            </span>
                            <span className={styles.progress_percent}>
                                {item.percent}
                            </span>
                        </div>
                        <div className={styles.progress_bar_bg}>
                            <div
                                className={`${styles.progress_bar_fill} ${progressColor}`}
                                style={{ width: item.percent }}
                            ></div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
