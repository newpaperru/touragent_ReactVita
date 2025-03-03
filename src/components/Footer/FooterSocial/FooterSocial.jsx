import styles from './FooterSocial.module.css';
import logo from '/logoDark.svg';

export const FooterSocial = () => {
    return (
        <div className={styles.footer_social}>
            <img src={logo} alt="логотип компании" style={{maxWidth: 126}} />
            <span className={styles.text}>Travel Helps Companies Manage Payments Easily.</span>
            <div className={styles.icons_wrap}>
                <img src="/linkedin.svg" alt="иконка соц сети" />
                <img src="/messenger.svg" alt="иконка соц сети" />
                <img src="/twitter.svg" alt="иконка соц сети" />
                <img src="/twoo.svg" alt="иконка соц сети" />
            </div>
        </div>
    )
}