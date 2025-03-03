import { FooterFollow } from "./FooterFollow/FooterFollow"
import { FooterLinks } from "./FooterLinks/FooterLinks"
import { FooterSocial } from "./FooterSocial/FooterSocial"
import styles from "./Footer.module.css";

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <FooterSocial />
                <FooterLinks />
                <FooterFollow  />
            </div>
            <span className={styles.copyright}>Copyright @ Boris, Anna, Alexey 2025. All Rights Reserved.</span>
        </footer>
    )
}