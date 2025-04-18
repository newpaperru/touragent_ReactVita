import { useState } from "react";
import styles from "./GalleryExplore.module.css";
import { useTickets } from "../../ProfilePage/Profile/useTickets";

const IMAGES = [
  { src: "/greenField.png", alt: "Green field landscape", className: "" },
  { src: "/womanTwoColumn.png", alt: "Woman traveling", className: styles.img_woman },
  { src: "/orangeField.png", alt: "Orange field landscape", className: "" },
  { src: "/sea.png", alt: "Sea view", className: "" },
  { src: "/smallGroupPeople.png", alt: "Small group of travelers", className: styles.img_small_group },
  { src: "/mountains.png", alt: "Mountain landscape", className: "" },
  { src: "/bigGroupPeople.png", alt: "Big group of travelers", className: styles.img_big_group },
];

export const GalleryExplore = ({ packageData }) => {
    const { addTicket, isTourInCart, goToProfile } = useTickets();
    const [isAdded, setIsAdded] = useState(false);

    const handleButtonClick = () => {
        if (!isTourInCart(packageData)) {
            addTicket(packageData);
            setIsAdded(true);
        }
        goToProfile();
    };

    const buttonText = isAdded || isTourInCart(packageData) 
        ? "Go to the basket" 
        : "Book Now";

    return (
        <div className={styles.basic_padding}>
            <h2 className={styles.title}>Gallery</h2>
            <div className={styles.grid_gallery}>
                {IMAGES.map((image, index) => (
                    <img
                        key={index}
                        src={image.src}
                        alt={image.alt}
                        className={image.className}
                        loading="lazy"
                    />
                ))}
            </div>
            <button 
                className={styles.btn} 
                onClick={handleButtonClick}
                aria-label={buttonText}
            >
                {buttonText}
            </button>
        </div>
    );
};