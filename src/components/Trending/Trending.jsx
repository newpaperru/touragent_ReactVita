import styles from './Trending.module.css';
import { TrendingList } from './TrendingList';

export const Trending = () => {
   return (
    <>
        <section className={styles.trending}>
            <div className={styles.trending__titles_wrap}>
                <span className={styles.subtitle}>trendy</span>
                <h2 className={styles.title}>our trending tour <br />packages</h2>
            </div>
            <TrendingList />
        </section>
    </>
   )
}