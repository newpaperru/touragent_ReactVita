import styles from "./Category.module.css";

import GuidedTours from "/guidedTours.svg";
import BestFlights from "/bestFlights.svg";
import ReligiousTours from "/religTours.svg";
import MedicalInsurance from "/medicInsurance.svg";
import { CategoryCard } from "./CategoryCard";

const cards = [
    {
        id: 1,
        img: GuidedTours,
        title: "Guided Tours",
        text: "sunt qui repellat saepe quo velit aperiam id aliquam placeat.",
    },
    {
        id: 2,
        img: BestFlights,
        title: "Best Flights Options",
        text: "sunt qui repellat saepe quo velit aperiam id aliquam placeat.",
    },
    {
        id: 3,
        img: ReligiousTours,
        title: "Religious Tours",
        text: "sunt qui repellat saepe quo velit aperiam id aliquam placeat.",
    },
    {
        id: 4,
        img: MedicalInsurance,
        title: "Medical insurance",
        text: "sunt qui repellat saepe quo velit aperiam id aliquam placeat.",
    },
];

export const Category = () => {
    return (
        <section className={styles.category}>
            <div className={styles.container}>
                <span className={styles.subtitle}>CATEGORY</span>
                <span className={styles.title}>We Offer Best Services</span>
                <div className={styles.wrap}>
                    {cards.map((item) => (
                        <CategoryCard 
                            key={item.id}
                            {...item}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
