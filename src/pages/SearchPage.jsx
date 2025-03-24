import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import headerStyles from "../components/Header/Header.module.css";
import searchImg from "/searchHeaderImg.png";
import middleHeaderStyles from "../components/Header/MiddleHeader/MiddleHeader.module.css";


export const SearchPage = () => {
    return (
        <>
            <Header
                title="Search tour"
                description="Travel With Us"
                imgSrc={searchImg}
                bgFiltered={headerStyles.others_page_filter}
                handClass={middleHeaderStyles.content_alt}
            />
            <Footer />
        </>
    );
};
