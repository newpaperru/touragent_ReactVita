import exploreNatureImage from "/exploreNature.png";
import exploreCitiesImage from "/exploreCities.png";
import styles from "./Explore.module.css";
import { ExploreBlock } from "./ExploreBlock";

const bords = [
    { id: 1, imgUrl: exploreNatureImage, text: "Explore Nature" },
    { id: 2, imgUrl: exploreCitiesImage, text: "Explore Cities" },
];

export const Explore = () => {
    return (
        <div className={styles.wrap}>
            {bords.map((item) => (
                <ExploreBlock key={item.id} {...item} />
            ))}
        </div>
    )
};
