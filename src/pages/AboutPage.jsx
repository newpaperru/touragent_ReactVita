import { InternationalPackages } from "../components/AboutPage/InternationalPackages/InternationalPackages";
import { PopularTour } from "../components/AboutPage/PopularTour/PopularTour";
import { Wanderlust } from "../components/AboutPage/Wanderlust/Wanderlust";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header"
import styles from "../components/Header/Header.module.css";
import middleHeaderStyles from "../components/Header/MiddleHeader/MiddleHeader.module.css";
import bgAbout from "/bgAbout.png";

export const PageAbout = () => {
  return (
    <>
      <Header 
        title="Read"
        description="About Us"
        imgSrc={bgAbout}
        bgFiltered={styles.others_page_filter}
        handClass={middleHeaderStyles.content_alt}
        handColorSvg="light"
      />
      <PopularTour />
      <Wanderlust />
      <InternationalPackages />
      <Footer />
    </>
  )
}