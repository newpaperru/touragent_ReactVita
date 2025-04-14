import styles from "./ExploreTabs.module.css";
import InfoIcon from "../../../assets/Icons/infoCircle.svg?react";
import CalendarIcon from "../../../assets/Icons/calendarExplore.svg?react";
import LocationIcon from "../../../assets/Icons/locationExplore.svg?react";
import GalleryIcon from "../../../assets/Icons/galleryExplore.svg?react";

const TAB_CONFIG = [
  {
    id: "information",
    label: "Information",
    Icon: InfoIcon,
  },
  {
    id: "tourPlan",
    label: "Tour Plan",
    Icon: CalendarIcon,
  },
  {
    id: "location",
    label: "Location",
    Icon: LocationIcon,
  },
  {
    id: "gallery",
    label: "Gallery",
    Icon: GalleryIcon,
  },
];

export const ExploreTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className={styles.container}>
      <div className={styles.explore_tabs}>
        <div className={styles.inner}>
          {TAB_CONFIG.map(({ id, label, Icon }) => (
            <button
              key={id}
              className={`${styles.tab} ${
                activeTab === id ? styles.active : ""
              }`}
              onClick={() => setActiveTab(id)}
            >
              <Icon />
              <span className={styles.text}>{label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};