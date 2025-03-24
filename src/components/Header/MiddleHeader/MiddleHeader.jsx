import styles from "./MiddleHeader.module.css";
import { People } from "./People";
import TitleVector from "../../../assets/Icons/titleVector.svg?react";

// eslint-disable-next-line react/prop-types
export const MiddleHeader = ({ title, description, peoples, titleCheck, theme, handClass }) => {
    return (
      <div className={handClass}>
        {titleCheck ? 
          (
            <TitleVector className={styles.img}/>
          ) : (
            <span className={styles.title}>{title}</span>
          )}
        <p className={theme}>{description}</p>
        {peoples && (
          <People />
        )}
      </div>
    );
  };