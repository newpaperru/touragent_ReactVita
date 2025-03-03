import { Header } from '../components/Header/Header';
import bgImg from '/bgImg.png';
import styles from '../components/Header/Header.module.css';
import { Partners } from '../components/Partners/Partners';
import { Trending } from '../components/Trending/Trending';
import { Footer } from '../components/Footer/Footer';

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
      <Trending />
      <Footer/>
    </>
  )
}