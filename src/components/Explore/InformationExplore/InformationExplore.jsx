import styles from "./InformationExplore.module.css";
import NotIncludedIcon from "../../../assets/Icons/notincluded.svg?react";
import IncludedIcon from "../../../assets/Icons/included.svg?react";
import { RatingStars } from "./RatingStars";
import { ServiceList } from "./ServiceList";

export const InformationExplore = ({ packageData }) => {
    const gridItems = [
        { title: "Destination", value: packageData.destination },
        { title: "Departure", value: packageData.departure },
        { title: "Departure Time", value: packageData.departureTime },
        { title: "Return Time", value: packageData.returnTime },
        { title: "Dress Code", value: packageData.dressCode },
    ];

    return (
        <div className={styles.information_explore}>
            <div className={styles.header}>
                <span className={styles.country}>{packageData.country}</span>
                <div className={styles.price_wrap}>
                    <span className={styles.price}>{packageData.price} $</span>
                    <span className={styles.price_text}>Per Couple</span>
                </div>
            </div>

            <RatingStars
                rating={parseFloat(packageData.rating)}
                reviewCount={packageData.review}
            />
            <p className={styles.description}>{packageData.fullDescription}</p>
            <div className={styles.grid}>
                {gridItems.map((item, index) => (
                    <>
                        <span key={`title-${index}`} className={styles.title}>
                            {item.title}
                        </span>
                        <p key={`value-${index}`} className={styles.value}>
                            : {item.value}
                        </p>
                    </>
                ))}
            </div>

            <div className={styles.wrap}>
                <ServiceList
                    items={packageData.notIncluded}
                    Icon={NotIncludedIcon}
                    title="Not Included"
                    isIncluded={false}
                />
                <ServiceList
                    items={packageData.included}
                    Icon={IncludedIcon}
                    title="Included"
                    isIncluded={true}
                />
            </div>

            {/* Кнопка бронирования */}
            <button className={styles.btn}>Book Now</button>
        </div>
    );
};
