import styles from "./MiddleHeader.module.css";
import { People } from "./People";
import titleVector from "/titleVector.svg";

// eslint-disable-next-line react/prop-types
export const MiddleHeader = ({ title, description, peoples, titleCheck }) => {
    return (
      <div className={styles.content}>
        {titleCheck ? 
          (
            <img className={styles.img} src={titleVector}></img>
          ) : (
            <span>{title}</span>
          )}
        <p className={styles.description}>{description}</p>
        {peoples && (
          <People />
        )}
      </div>
    );
  };