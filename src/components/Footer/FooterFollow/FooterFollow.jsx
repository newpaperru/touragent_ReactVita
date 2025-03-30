import styles from "./FooterFollow.module.css";

export const FooterFollow = () => {
    return (
        <div className={styles.footer_follow}>
            <span className={styles.title}>Join Our Newsletter</span>
            <form method="post" style={{marginBottom: 21}}>
                <label>
                    <input type="email" name="input"  placeholder="Your email adress" className={styles.input} />
                    <button type="submit" className={styles.btn}>Subscribe</button>
                </label>
            </form>
            <span className={styles.note}>*  Will send you weekly updates for your better
                tour packages.</span>
        </div>
    )
}