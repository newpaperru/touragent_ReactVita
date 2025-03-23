import styles from "./MiddleHeader.module.css";
import { People } from "./People";
import titleVector from "/titleVector.svg";

// eslint-disable-next-line react/prop-types
export const MiddleHeader = ({ title, description, peoples, titleCheck, theme }) => {
    return (
      <div className={styles.content}>
        {titleCheck ? 
          (
            <img className={styles.img} src={titleVector}></img>
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