import styles from "./InformationExplore.module.css";
import NotIncludedIcon from "../../../assets/Icons/notincluded.svg?react";
import IncludedIcon from "../../../assets/Icons/included.svg?react";
import { RatingStars } from "./RatingStars";
import { ServiceList } from "./ServiceList";
import { useTickets } from "../../ProfilePage/Profile/useTickets";
import { useState } from "react";

export const InformationExplore = ({ packageData }) => {
    const gridItems = [
        { title: "Destination", value: packageData.destination },
        { title: "Departure", value: packageData.departure },
        { title: "Departure Time", value: packageData.departureTime },
        { title: "Return Time", value: packageData.returnTime },
        { title: "Dress Code", value: packageData.dressCode },
    ];

    const { addTicket, isTourInCart, goToProfile } = useTickets();
    const [isAdded, setIsAdded] = useState(false);

    const handleButtonClick = () => {
        if (!isTourInCart(packageData)) {
            addTicket(packageData);
            setIsAdded(true);
        }
        goToProfile();
    };

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
                    <div
                        key={`grid-item-${index}`}
                        className={styles.grid_item}
                    >
                        <span className={styles.title}>{item.title}</span>
                        <p className={styles.value}>: {item.value}</p>
                    </div>
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

            <button 
                className={styles.btn} 
                onClick={handleButtonClick}
            >
                {isAdded || isTourInCart(packageData) ? 'Go to the basket' : 'Book Now'}
            </button>
        </div>
    );
};
