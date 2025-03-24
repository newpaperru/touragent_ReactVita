import { TopHeader } from "../components/Header/TopHeader/TopHeader";
import styles from "../components/Header/TopHeader/TopHeader.module.css";
import { Profile } from "../components/ProfilePage/Profile/Profile";
import { Footer } from "../components/Footer/Footer";

export const PageProfile = () => {
    return (
        <>
            <TopHeader theme={styles.dark_theme} handColorSvg="dark" />
            <Profile />
            <Footer />
        </>
    );
};
