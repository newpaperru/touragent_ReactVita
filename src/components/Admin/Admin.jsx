import { useState, useEffect } from "react";
import { AddTourForm } from "./AddTourForm";
import { useTours } from "./useTours";
import { useAuth } from "./useAuth";
import { useTickets } from "../ProfilePage/Profile/useTickets";
import styles from "./Admin.module.css";
import { OrdersTable } from "./Admin__elements/OrdersTable";
import { CurrentTours } from "./Admin__elements/CurrentTours";

export const Admin = () => {
    const [showForm, setShowForm] = useState(false);
    const [users, setUsers] = useState([]);
    const [successMessage, setSuccessMessage] = useState(false);
    const { tours, addTour, removeTour } = useTours();
    const { logout } = useAuth();
    const { orders = [], updateOrderStatus } = useTickets();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch("http://localhost:3000/users");
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };
        fetchUsers();
    }, []);

    const handleAddTour = async (newTour) => {
        await addTour(newTour);
        setSuccessMessage(true);
        setTimeout(() => {
            setSuccessMessage(false);
            setShowForm(false);
        }, 3000);
    };

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

            <OrdersTable
                orders={orders}
                users={users}
                updateOrderStatus={updateOrderStatus}
            />

            {showForm && (
                <AddTourForm
                    onSubmit={handleAddTour}
                    onClose={() => setShowForm(false)}
                    showSuccess={successMessage}
                />
            )}

            <CurrentTours tours={tours} removeTour={removeTour} />
        </div>
    );
};
