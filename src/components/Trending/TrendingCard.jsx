import styles from './TrendingCard.module.css';
import '../../css/font-style.css'

export const TrendingCard = ({ imgURL, iconURL, countDays, countPeople, discount, title, place, price, description}) => {

      const stars = Array(5).fill(0);
      const discountedPrice = discount ? price - price * discount : price;

      const handlingCountPeople = (countPeople) => {
            const parsedCount = parseInt(countPeople, 10);
            if (isNaN(parsedCount)) return countPeople;
          
            if (parsedCount >= 10000 && parsedCount <= 999999) {
              return `${(parsedCount / 1000).toFixed(1)}k`;
            }
            if (parsedCount >= 1000000) {
                  return `${(parsedCount / 1000000).toFixed(1)}m`;
            }
          
            return parsedCount;
          };

      return (
            <div className={styles.card}>
                  <div className={styles.card__img_wrap}>
                        <img src={imgURL} alt="изображения места" className={styles.card__img} />
                        <img src={iconURL} alt="иконка места" className={styles.card__icon} />
                  </div>
                  <div className={styles.card__container}>
                        <div className={styles.card__data}>
                              <div className={styles.card__days_wrap}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M19 4H17V3C17 2.73478 16.8946 2.48043 16.7071 2.29289C16.5196 2.10536 16.2652 2 16 2C15.7348 2 15.4804 2.10536 15.2929 2.29289C15.1054 2.48043 15 2.73478 15 3V4H9V3C9 2.73478 8.89464 2.48043 8.70711 2.29289C8.51957 2.10536 8.26522 2 8 2C7.73478 2 7.48043 2.10536 7.29289 2.29289C7.10536 2.48043 7 2.73478 7 3V4H5C4.20435 4 3.44129 4.31607 2.87868 4.87868C2.31607 5.44129 2 6.20435 2 7V19C2 19.7956 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 22 5 22H19C19.7956 22 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7956 22 19V7C22 6.20435 21.6839 5.44129 21.1213 4.87868C20.5587 4.31607 19.7956 4 19 4ZM20 19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196 19.8946 19.2652 20 19 20H5C4.73478 20 4.48043 19.8946 4.29289 19.7071C4.10536 19.5196 4 19.2652 4 19V12H20V19ZM20 10H4V7C4 6.73478 4.10536 6.48043 4.29289 6.29289C4.48043 6.10536 4.73478 6 5 6H7V7C7 7.26522 7.10536 7.51957 7.29289 7.70711C7.48043 7.89464 7.73478 8 8 8C8.26522 8 8.51957 7.89464 8.70711 7.70711C8.89464 7.51957 9 7.26522 9 7V6H15V7C15 7.26522 15.1054 7.51957 15.2929 7.70711C15.4804 7.89464 15.7348 8 16 8C16.2652 8 16.5196 7.89464 16.7071 7.70711C16.8946 7.51957 17 7.26522 17 7V6H19C19.2652 6 19.5196 6.10536 19.7071 6.29289C19.8946 6.48043 20 6.73478 20 7V10Z" fill="#7D7D7D"/>
                                    </svg>
                                    <span className={styles.card__days}>{countDays} Days</span>
                              </div>
                              <div className={styles.card__people_wrap}>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M10 8C11.7 8 13.06 6.65 13.06 5C13.06 3.35 11.7 2 10 2C8.3 2 6.94 3.35 6.94 5C6.94 6.65 8.3 8 10 8ZM10 10C7.2 10 4.94 7.76 4.94 5C4.94 2.24 7.2 0 10 0C12.8 0 15.06 2.24 15.06 5C15.06 7.76 12.8 10 10 10ZM3 18H17V16.67C17 14.92 14.69 13.11 10 13.11C5.31 13.11 3 14.92 3 16.67V18ZM10 11.11C16.66 11.11 19 14.44 19 16.67V20H1V16.67C1 14.44 3.34 11.11 10 11.11Z" fill="#7D7D7D"/>
                                    </svg>
                                    <span className={styles.card__people}>{handlingCountPeople(countPeople)} people going</span>
                              </div>
                        </div>
                        <div className={styles.card__info}>
                              <h2 className={styles.card__country_name}>{title}</h2>
                              <div style={{ display: 'flex', alignItems: 'center' }}>
                                    {stars.map((_, index) => (
                                          <svg 
                                                key={index}
                                                width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_0_1056)">
                                                      <path d="M3.61212 15.443C3.22612 15.641 2.78812 15.294 2.86612 14.851L3.69612 10.121L0.173118 6.76501C-0.155882 6.45101 0.0151183 5.87701 0.456118 5.81501L5.35412 5.11901L7.53812 0.792012C7.73512 0.402012 8.26812 0.402012 8.46512 0.792012L10.6491 5.11901L15.5471 5.81501C15.9881 5.87701 16.1591 6.45101 15.8291 6.76501L12.3071 10.121L13.1371 14.851C13.2151 15.294 12.7771 15.641 12.3911 15.443L8.00012 13.187L3.61112 15.443H3.61212Z" fill="#FFBA0A"/>
                                                </g>
                                                <defs>
                                                      <clipPath id="clip0_0_1056">
                                                            <rect width="16" height="16" fill="white"/>
                                                      </clipPath>
                                                </defs>
                                          </svg>
                                          
                                    ))}
                              </div>
                        </div>
                        <div className={styles.card__place_wrap}>
                              <svg width="19" height="25" viewBox="0 0 19 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_0_1044)">
                                          <path d="M17.4884 10.0134C17.4884 7.96174 16.6734 5.99412 15.2226 4.54339C13.7719 3.09266 11.8043 2.27765 9.75264 2.27765C7.70099 2.27765 5.73338 3.09266 4.28265 4.54339C2.83192 5.99412 2.0169 7.96174 2.0169 10.0134C2.0169 13.1868 4.55594 17.3228 9.75264 22.2771C14.9493 17.3228 17.4884 13.1868 17.4884 10.0134ZM9.75264 24.6253C3.44887 18.8957 0.297852 14.0239 0.297852 10.0134C0.297852 7.50582 1.29398 5.10095 3.06709 3.32784C4.84021 1.55472 7.24507 0.558594 9.75264 0.558594C12.2602 0.558594 14.6651 1.55472 16.4382 3.32784C18.2113 5.10095 19.2074 7.50582 19.2074 10.0134C19.2074 14.0239 16.0564 18.8957 9.75264 24.6253Z" fill="#7D7D7D"/>
                                          <path d="M9.75222 12.5928C10.4361 12.5928 11.092 12.3211 11.5756 11.8375C12.0591 11.3539 12.3308 10.6981 12.3308 10.0142C12.3308 9.3303 12.0591 8.67443 11.5756 8.19085C11.092 7.70728 10.4361 7.43561 9.75222 7.43561C9.06834 7.43561 8.41247 7.70728 7.92889 8.19085C7.44531 8.67443 7.17364 9.3303 7.17364 10.0142C7.17364 10.6981 7.44531 11.3539 7.92889 11.8375C8.41247 12.3211 9.06834 12.5928 9.75222 12.5928V12.5928ZM9.75222 14.3118C8.61242 14.3118 7.5193 13.859 6.71334 13.0531C5.90737 12.2471 5.45459 11.154 5.45459 10.0142C5.45459 8.87438 5.90737 7.78126 6.71334 6.9753C7.5193 6.16934 8.61242 5.71655 9.75222 5.71655C10.892 5.71655 11.9851 6.16934 12.7911 6.9753C13.5971 7.78126 14.0499 8.87438 14.0499 10.0142C14.0499 11.154 13.5971 12.2471 12.7911 13.0531C11.9851 13.859 10.892 14.3118 9.75222 14.3118Z" fill="#7D7D7D"/>
                                    </g>
                                    <defs>
                                          <clipPath id="clip0_0_1044">
                                                <rect width="19" height="25" fill="white"/>
                                          </clipPath>
                                    </defs>
                              </svg>
                              <span className={styles.card__name_place}>{place}</span>
                        </div>
                        <div className={styles.card__price_wrap}>
                              {discount ? (
                                    <>
                                          <span className={styles.card__discount} style={{marginRight: 19}}>{Math.round(discountedPrice)} $</span>
                                          <span className={styles.card__price_line_through}>{price} $</span>
                                    </>
                              ) : (
                                    <span className={styles.card__price}>{price} $</span>
                              )}
                        </div>
                        <p className={styles.card__description}>{description}</p>
                        <button className={styles.card__btn}>Explore Now</button>
                  </div>
            </div>
      )
}