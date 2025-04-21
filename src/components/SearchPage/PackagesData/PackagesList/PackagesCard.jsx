import styles from "./PackagesCard.module.css";
import { Link } from "react-router-dom";

import PackagesDate from "../../../../assets/Icons/packagesDate.svg?react";
import PackagesPeople from "../../../../assets/Icons/packagesPeople.svg?react";
import PackagesStar from "../../../../assets/Icons/packagesStar.svg?react";

export const PackagesCard = ({ data, isAdmin = false, onDelete }) => {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
        }).format(date);
    };

    return (
        <div className={styles.packages_card}>
            <div className={styles.overlay}>
                <Link
                    to={{
                        pathname: `/explore/${data.id}`,
                        state: { packageData: data },
                    }}
                    className={styles.explore_button}
                >
                    Explore
                </Link>
                {isAdmin && (
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            onDelete(data.id);
                        }}
                        className={styles.delete_button}
                    >
                        Delete
                    </button>
                )}
            </div>

            <div className={styles.wrap_img}>
                <img
                    src={data.urlImg}
                    alt={data.country}
                    className={styles.img}
                />
                <div className={styles.info_img}>
                    <div className={styles.date_wrap}>
                        <PackagesDate />
                        <span className={styles.info_text}>
                            {formatDate(data.date)}
                        </span>
                    </div>
                    <div className={styles.people_wrap}>
                        <PackagesPeople />
                        <span className={styles.info_text}>
                            {data.countPeople}+ People
                        </span>
                    </div>
                </div>
            </div>
            <div className={styles.info}>
                <span className={styles.country}>{data.country}</span>
                <p className={styles.description}>{data.description}</p>
                <div className={styles.details}>
                    <span className={styles.price}>$ {data.price}</span>
                    <div className={styles.star_wrap}>
                        <PackagesStar />
                        <span className={styles.star}>{data.rating}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
