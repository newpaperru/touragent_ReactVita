import { useState, useEffect } from "react";
import { AddTourForm } from "./AddTourForm";
import { PackagesCard } from "../SearchPage/PackagesData/PackagesList/PackagesCard";
import { useTours } from "./useTours";
import { useAuth } from "./useAuth";
import { useTickets } from "../ProfilePage/Profile/useTickets";
import styles from "./Admin.module.css";

const STATUS = {
    NA: "N/A",
    APPROVED: "Approved",
    REJECTED: "Rejected",
    PENDING: "Pending",
};

export const Admin = () => {
    const [showForm, setShowForm] = useState(false);
    const [users, setUsers] = useState([]);
    const { tours, addTour, removeTour } = useTours();
    const { logout } = useAuth();
    const { orders, updateOrderStatus } = useTickets();
    const [successMessage, setSuccessMessage] = useState(false);

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

    const getUserInfo = (userId) => {
        return users.find((user) => user.id === userId) || {};
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

            <div className={styles.section}>
                <h2 className={styles.subtitle}>Orders Management</h2>
                <div className={styles.table_container}>
                    <table className={styles.orders_table}>
                        <thead>
                            <tr>
                                <th>User</th>
                                <th>Contact Info</th>
                                <th>Order Details</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order) => {
                                const user = getUserInfo(order.userId);
                                return (
                                    <tr key={order.orderId}>
                                        <td className={styles.user_info}>
                                            Full Name:{" "}
                                            <span className={styles.data}>
                                                {user.fullName || STATUS.NA}
                                            </span>
                                            <br />
                                            ID:{" "}
                                            <span className={styles.data}>
                                                {order.userId}
                                            </span>
                                        </td>
                                        <td className={styles.user_info}>
                                            Email:{" "}
                                            <span className={styles.data}>
                                                {user.email || STATUS.NA}
                                            </span>
                                            <br />
                                            Phone:{" "}
                                            <span className={styles.data}>
                                                {user.phone || STATUS.NA}
                                            </span>
                                            <br />
                                            Birth:{" "}
                                            <span className={styles.data}>
                                                {user.birthDate || STATUS.NA}
                                            </span>
                                        </td>
                                        <td className={styles.user_info}>
                                            Country:{" "}
                                            <span className={styles.data}>
                                                {order.country}
                                            </span>
                                            <br />
                                            Price:{" "}
                                            <span className={styles.data}>
                                                ${order.price}
                                            </span>
                                            <br />
                                            Date:{" "}
                                            <span className={styles.data}>
                                                {order.date}
                                            </span>
                                        </td>
                                        <td>
                                            <span
                                                className={
                                                    order.adminStatus ===
                                                    STATUS.APPROVED
                                                        ? styles.status_approved
                                                        : order.adminStatus ===
                                                          STATUS.REJECTED
                                                        ? styles.status_rejected
                                                        : styles.status_pending
                                                }
                                            >
                                                {order.adminStatus}
                                            </span>
                                        </td>
                                        <td>
                                            {order.adminStatus ===
                                                STATUS.PENDING && (
                                                <>
                                                    <button
                                                        className={
                                                            styles.approve_btn
                                                        }
                                                        onClick={() =>
                                                            updateOrderStatus(
                                                                order.orderId,
                                                                STATUS.APPROVED
                                                            )
                                                        }
                                                    >
                                                        Approve
                                                    </button>
                                                    <button
                                                        className={
                                                            styles.reject_btn
                                                        }
                                                        onClick={() =>
                                                            updateOrderStatus(
                                                                order.orderId,
                                                                STATUS.REJECTED
                                                            )
                                                        }
                                                    >
                                                        Reject
                                                    </button>
                                                </>
                                            )}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

            {showForm && (
                <AddTourForm
                    onSubmit={async (newTour) => {
                        await addTour(newTour);
                        setSuccessMessage(true);
                        setTimeout(() => {
                            setSuccessMessage(false);
                            setShowForm(false);
                        }, 3000);
                    }}
                    onClose={() => setShowForm(false)}
                    showSuccess={successMessage}
                />
            )}

            <div className={styles.section}>
                <h2 className={styles.subtitle}>Current Tours</h2>
                <div className={styles.grid}>
                    {tours.map((tour, index) => (
                        <PackagesCard
                            key={index}
                            data={tour}
                            isAdmin={true}
                            onDelete={removeTour}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
