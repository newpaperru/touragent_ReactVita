import styles from "./PackagesData.module.css";

import { useState, useEffect } from "react";

import { PackagesFilter } from "../PackagesFilter/PackagesFilter";
import { PackagesList } from "./PackagesList/PackagesList";

export const PackagesData = ({
    archiveData = [],
    textFilters,
    onTextFilterChange,
}) => {
    const [priceRange, setPriceRange] = useState({ min: 0, max: 2000 });

    useEffect(() => {
        if (archiveData.length > 0) {
            const prices = archiveData.map((item) => Number(item.price));
            setPriceRange({
                min: Math.min(...prices),
                max: Math.max(...prices),
            });
        }
    }, [archiveData]);

    return (
        <div className={styles.packages_data}>
            <PackagesFilter
                priceRange={priceRange}
                filters={textFilters}
                onFilterChange={onTextFilterChange}
            />
            {archiveData.length === 0 ? (
                <div className={styles.notFound}>No tours found</div>
            ) : (
                <PackagesList archiveData={archiveData} />
            )}
        </div>
    );
};
