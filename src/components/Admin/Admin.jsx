import { useState } from "react";
import { AddTourForm } from "./AddTourForm";
import { PackagesCard } from "../SearchPage/PackagesData/PackagesList/PackagesCard";
import { useTours } from "./useTours";
import { useAuth } from "./useAuth";
import styles from "./Admin.module.css";

export const Admin = () => {
    const [showForm, setShowForm] = useState(false);
    const { tours, addTour } = useTours();
    const { logout } = useAuth();

    return (
        <div className={styles.panel}>
            <header className={styles.header}>
                <h1 className={styles.title}>Admin Dashboard</h1>
                <div>
                    <button 
                        onClick={() => setShowForm(!showForm)}
                        className={styles.button}
                    >
                        {showForm ? "Hide Form" : "Add New Tour"}
                    </button>
                    <button 
                        onClick={logout}
                        className={`${styles.button} ${styles.logout}`}
                    >
                        Log out
                    </button>
                </div>
            </header>
            
            {showForm && <AddTourForm onSubmit={addTour} />}
            
            <div className={styles.list}>
                <span className={styles.subtitle}>Current Tours</span>
                <div className={styles.grid}>
                    {tours.map((tour, index) => (
                        <PackagesCard key={index} data={tour} />
                    ))}
                </div>
            </div>
        </div>
    );
};