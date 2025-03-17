import { Header } from "../components/Header/Header";
import bgImg from "/bgImg.png";
import styles from "../components/Header/Header.module.css";
import { Partners } from "../components/Partners/Partners";
import { Trending } from "../components/Trending/Trending";
import { Footer } from "../components/Footer/Footer";
import { Category } from "../components/Category/Category";
import { FastNEasy } from "../components/FastNEasy/FastNEasy";
import { Explore } from "../components/Explore/Explore";
import { LetsMake } from "../components/LetsMake/LetsMake";
import { BestPackages } from "../components/BestPackages/BestPackages";
import { Honeymoon } from "../components/Honeymoon/Honeymoon";

export const PageHome = () => {
    return (
        <>
            <Header
                description="No matter where you’re going to, we’ll take you there"
                peoples
                titleCheck
                imgSrc={bgImg}
                bgFiltered={styles.homePageFilter}
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
