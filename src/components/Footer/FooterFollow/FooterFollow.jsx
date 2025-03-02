import styles from './FooterFollow.module.css';

export const FooterFollow = () => {
    return (
        <div className={styles.footer_follow}>
            <span className={styles.footer_follow__title}>Join Our Newsletter</span>
            <form method="post" style={{marginBottom: 21}}>
                <label>
                    <input type="email" name="input"  placeholder='Your email adress' className={styles.footer_follow__input} />
                    <button type="submit" className={styles.footer_follow__btn}>Subscribe</button>
                </label>
            </form>
            <span className={styles.footer_follow__note}>*  Will send you weekly updates for your better
                tour packages.</span>
        </div>
    )
}