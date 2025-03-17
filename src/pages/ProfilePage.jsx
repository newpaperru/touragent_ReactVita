import { TopHeader } from "../components/Header/TopHeader/TopHeader";
import darkLogo from "/logoDark.svg";
import styles from "../components/Header/TopHeader/TopHeader.module.css";
import { Profile } from "../components/Profile/Profile";
import { Footer } from "../components/Footer/Footer"

export const PageProfile = () => {
    return (
        <div>
            <TopHeader logoImg={darkLogo} theme={styles.dark_theme} />
            <Profile />
            <Footer />
        </div>
    );
};
