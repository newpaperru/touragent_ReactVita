import styles from "./Partners.module.css";
import airbnbImg from "/airbnb.png";
import imaratesImg from "/imarates.png";
import swissImg from "/swiss.png";
import trivagoImg from "/trivago.png";
import turkishImg from "/turkish.png";

export const Partners = () => {
      const partners = [
            {id: 1, imgUrl: airbnbImg},
            {id: 2, imgUrl: imaratesImg},
            {id: 3, imgUrl: swissImg},
            {id: 4, imgUrl: trivagoImg},
            {id: 5, imgUrl: turkishImg},
      ]

      return (
            <>
                  <div className={styles.container}>
                        {partners.map((partner) => (
                              <img src={partner.imgUrl} alt="партнер иконка" key={partner.id} className={styles.img}/>
                        ))}
                  </div>
            </>
      )
}