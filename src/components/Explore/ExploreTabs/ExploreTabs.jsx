import styles from "./ExploreTabs.module.css";

import InfoIcon from "../../../assets/Icons/infoCircle.svg?react";
import CalendarIcon from "../../../assets/Icons/calendarExplore.svg?react";
import LocationIcon from "../../../assets/Icons/locationExplore.svg?react";
import GalleryIcon from "../../../assets/Icons/galleryExplore.svg?react";

export const ExploreTabs = ({ activeTab, setActiveTab }) => {
    return (
        <div className={styles.container}>
            <div className={styles.explore_tabs}>
                <div className={styles.inner}>
                    <button
                        className={`${styles.tab} ${
                            activeTab === "information" ? styles.active : ""
                        }`}
                        onClick={() => setActiveTab("information")}
                    >
                        <InfoIcon />
                        <span className={styles.text}>Information</span>
                    </button>
                    <button
                        className={`${styles.tab} ${
                            activeTab === "tourPlan" ? styles.active : ""
                        }`}
                        onClick={() => setActiveTab("tourPlan")}
                    >
                        <CalendarIcon />
                        <span className={styles.text}>Tour Plan</span>
                    </button>
                    <button
                        className={`${styles.tab} ${
                            activeTab === "location" ? styles.active : ""
                        }`}
                        onClick={() => setActiveTab("location")}
                    >
                        <LocationIcon />
                        <span className={styles.text}>Location</span>
                    </button>
                    <button
                        className={`${styles.tab} ${
                            activeTab === "gallery" ? styles.active : ""
                        }`}
                        onClick={() => setActiveTab("gallery")}
                    >
                        <GalleryIcon />
                        <span className={styles.text}>Gallery</span>
                    </button>
                </div>
            </div>
        </div>
    );
};
