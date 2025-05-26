import styles from "../Payment.module.css";

export const CommentSection = ({ register }) => {
    return (
        <div className={styles.comment_block}>
            <h2 className={styles.title}>Comment</h2>
            <span className={styles.spec_info}>
                Leave a comment if you need to provide additional information.
            </span>
            <textarea
                {...register("comment")}
                className={styles.comment}
                placeholder="Write your comment"
                rows={2}
            />
        </div>
    );
};