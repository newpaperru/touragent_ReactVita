import bgImg from "/bgImg.png";
import styles from "../components/Header/Header.module.css";
import middleHeaderStyles from "../components/Header/MiddleHeader/MiddleHeader.module.css";

import { Header } from "../components/Header/Header";
import { Partners } from "../components/HomePage/Partners/Partners";
import { Trending } from "../components/HomePage/Trending/Trending";
import { Footer } from "../components/Footer/Footer";
import { Category } from "../components/HomePage/Category/Category";
import { FastNEasy } from "../components/HomePage/FastNEasy/FastNEasy";
import { Explore } from "../components/HomePage/Explore/Explore";
import { LetsMake } from "../components/HomePage/LetsMake/LetsMake";
import { BestPackages } from "../components/HomePage/BestPackages/BestPackages";
import { Honeymoon } from "../components/HomePage/Honeymoon/Honeymoon";

export const PageHome = () => {
    return (
        <>
            <Header
                description="No matter where you’re going to, we’ll take you there"
                peoples
                handClass={middleHeaderStyles.content}
                isCenter
                titleCheck
                imgSrc={bgImg}
                bgFiltered={styles.home_page_filter}
                changeFontFamily
            />
            <Partners />
            <Category />
            <Honeymoon />
            <FastNEasy />
            <LetsMake />
            <BestPackages />
            <Explore />
            <Trending />
            <Footer />
        </>
    );
};
