import { PackagesCard } from "./PackagesCard";
import styles from "./PackagesList.module.css";

export const PackagesList = ({ archiveData = [] }) => {
    return (
        <div className={styles.packages_list}>
            {archiveData.map((item) => (
                <PackagesCard key={item.id} data={item} />
            ))}
        </div>
    );
};