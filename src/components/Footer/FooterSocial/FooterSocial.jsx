import styles from "./FooterSocial.module.css";

import Logo from "../../../assets/Icons/logo.svg?react";
import Linkedin from "../../../assets/Icons/linkedin.svg?react"
import Messenger from "../../../assets/Icons/messenger.svg?react"
import Twitter from "../../../assets/Icons/twitter.svg?react"
import Twoo from "../../../assets/Icons/twoo.svg?react"

export const FooterSocial = () => {
    return (
        <div className={styles.footer_social}>
            <Logo fill={"var(--title-color)"}/>
            <span className={styles.text}>Travel Helps Companies Manage Payments Easily.</span>
            <div className={styles.icons_wrap}>
                <Linkedin />
                <Messenger />
                <Twitter />
                <Twoo />
            </div>
        </div>
    )
}