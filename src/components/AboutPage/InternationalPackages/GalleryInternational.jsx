import styles from "./GalleryInternational.module.css";
import firstImg from "../../../assets/GalleryInternational/InternationalFirst.png";
import secondImg from "../../../assets/GalleryInternational/InternationalSecond.png";
import thirdImg from "../../../assets/GalleryInternational/InternationalTwoRows.png";
import fourImg from "../../../assets/GalleryInternational/InternationalThird.png";
import fiveImg from "../../../assets/GalleryInternational/InternationalFour.png";
import sixImg from "../../../assets/GalleryInternational/InternationalFive.png";
import sevenImg from "../../../assets/GalleryInternational/InternationalSix.png";
import eightImg from "../../../assets/GalleryInternational/InternationalSeven.png";
import nineImg from "../../../assets/GalleryInternational/InternationalEight.png";
import tenImg from "../../../assets/GalleryInternational/InternationalNine.png";
import elevenImg from "../../../assets/GalleryInternational/InternationalTen.png";
import { CardGallery } from "./CardGallery";

const imgs = [
    {
        id: 1,
        imgURL: firstImg,
        classes: styles.one_column,
        country: "Barcelona",
        price: "$1850",
    },
    {
        id: 2,
        imgURL: secondImg,
        classes: styles.one_column,
        country: "Barcelona",
        price: "$3850",
    },
    {
        id: 3,
        imgURL: thirdImg,
        classes: styles.two_rows,
        country: "Barcelona",
        price: "$650",
    },
    {
        id: 4,
        imgURL: fourImg,
        classes: styles.one_column,
        country: "Barcelona",
        price: "$450",
    },
    {
        id: 5,
        imgURL: fiveImg,
        classes: styles.one_column,
        country: "Barcelona",
        price: "$950",
    },
    {
        id: 6,
        imgURL: sixImg,
        classes: styles.one_column,
        country: "Barcelona",
        price: "$250",
    },
    {
        id: 7,
        imgURL: sevenImg,
        classes: styles.one_column,
        country: "Barcelona",
        price: "$120",
    },
    {
        id: 8,
        imgURL: eightImg,
        classes: styles.one_column,
        country: "Barcelona",
        price: "$300",
    },
    {
        id: 9,
        imgURL: nineImg,
        classes: styles.one_column,
        country: "Barcelona",
        price: "$543",
    },
    {
        id: 10,
        imgURL: tenImg,
        classes: styles.one_column,
        country: "Barcelona",
        price: "$1000",
    },
    {
        id: 11,
        imgURL: elevenImg,
        classes: styles.one_column,
        country: "Barcelona",
        price: "$299",
    },
];

export const GalleryInternational = () => {
    return (
        <div className={styles.gallery_international}>
            {imgs.map((item) => (
                <CardGallery key={item.id} {...item}/>
            ))}
        </div>
    );
};
