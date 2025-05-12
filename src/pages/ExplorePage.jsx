import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Explore } from "../components/Explore/Explore";

import middleHeaderStyles from "../components/Header/MiddleHeader/MiddleHeader.module.css";
import headerStyles from "../components/Header/Header.module.css";
import exploreMainImg from "/exploreBG.png";

export const ExplorePage = () => {
    return (
        <>
            <Header
                title="Explore"
                description="Landscapes"
                imgSrc={exploreMainImg}
                bgFiltered={headerStyles.others_page_filter}
                handClass={middleHeaderStyles.content_alt}
            />
            <Explore />
            <Footer />
        </>
    );
};