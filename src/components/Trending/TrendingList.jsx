import styles from "./TrendingList.module.css";
// изображения
import cardImgSwitzerland from "/switzerlandTrending.png";
import cardImgAmazon from "/amazonImg.png";
import cardImgGiza from "/gizaImg.png";
// иконки
import cardIconSwitzerland from "/switIcon.png";
import cardIconAmazon from "/amazonIcon.png";
import cardIconGiza from "/gizaIcon.png";

import { TrendingCard } from "./TrendingCard";

const cardList = [
    {
        id: 1,
        imgURL: cardImgSwitzerland,
        iconURL: cardIconSwitzerland,
        countDays: "8",
        countPeople: "575757",
        discount: 0.1667,
        title: "Switzerland",
        place: "Europe",
        price: 1200,
        description:
            "Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. \
        Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos.",
    },
    {
        id: 2,
        imgURL: cardImgAmazon,
        iconURL: cardIconAmazon,
        countDays: "14",
        countPeople: "2500000",
        discount: 0.13,
        title: "Amazon",
        place: "Brazil",
        price: 1800,
        description:
            "Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. \
        Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos.",
    },
    {
        id: 3,
        imgURL: cardImgGiza,
        iconURL: cardIconGiza,
        countDays: "3",
        countPeople: "800",
        discount: 0.1,
        title: "Giza",
        place: "Egypt",
        price: 2000,
        description:
            "Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. \
        Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos.",
    },
];

export const TrendingList = () => {
    return (
        <div className={styles.trending__card_list}>
            {cardList.map((item) => (
                <TrendingCard key={item.id} {...item} />
            ))}
        </div>
    );
};
