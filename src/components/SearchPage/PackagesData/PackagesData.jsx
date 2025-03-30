import { useMemo } from "react";
import styles from "./PackagesData.module.css";
import { PackagesFilter } from "../PackagesFilter/PackagesFilter";
import { PackagesList } from "./PackagesList/PackagesList";

export const PackagesData = ({
    archiveData = [],
    textFilters,
    onTextFilterChange,
}) => {
    const priceRange = useMemo(() => {
        if (archiveData.length === 0) return { min: 0, max: 2000 };

        const prices = archiveData.map((item) => Number(item.price));
        return {
            min: Math.min(...prices),
            max: Math.max(...prices),
        };
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
