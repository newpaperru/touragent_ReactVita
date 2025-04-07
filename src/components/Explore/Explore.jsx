import { useState } from "react";
import styles from "./Explore.module.css";
import { ExploreTabs } from "./ExploreTabs/ExploreTabs";
import { InformationExplore } from "./InformationExplore/InformationExplore";
import { TourPlanExplore } from "./TourPlanExplore/TourPlanExplore";
import { LocationExplore } from "./LocationExplore/LocationExplore";
import { GalleryExplore } from "./GalleryExplore/GalleryExplore";
import { useExploreData } from "./useExploreData";

export const Explore = () => {
    const { packageData, error } = useExploreData();
    const [activeTab, setActiveTab] = useState("information");

    const getActiveComponent = () => {
        const components = {
            information: InformationExplore,
            tourPlan: TourPlanExplore,
            location: LocationExplore,
            gallery: GalleryExplore,
        };
        return components[activeTab] || InformationExplore;
    };

    if (error) return <div className={styles.error}>{error}</div>;
    if (!packageData)
        return <div className={styles.not_found}>Package not found</div>;

    const ActiveComponent = getActiveComponent();

    return (
        <div className={styles.container}>
            <ExploreTabs activeTab={activeTab} setActiveTab={setActiveTab} />
            <ActiveComponent packageData={packageData} />
        </div>
    );
};
