import { FooterFollow } from "./FooterFollow/FooterFollow"
import { FooterLinks } from "./FooterLinks/FooterLinks"
import { FooterSocial } from "./FooterSocial/FooterSocial"
import styles from "./Footer.module.css";

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__content}>
                <FooterSocial />
                <FooterLinks />
                <FooterFollow  />
            </div>
            <span className={styles.footer__copyright}>Copyright @ Boris, Anna, Alexey 2025. All Rights Reserved.</span>
        </footer>
    )
}