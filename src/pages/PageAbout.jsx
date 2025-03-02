import { Header } from '../components/Header/Header'
import styles from '../components/Header/Header.module.css';
import bgAbout from '/bgAbout.png';

export const PageAbout = () => {
  return (
    <>
      <Header 
        title="Read"
        description="About Us"
        imgSrc={bgAbout}
        bgFiltered={styles.aboutPageFilter}
      />
    </>
  )
}