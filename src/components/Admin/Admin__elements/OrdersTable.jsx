import { STATUS } from "./constants";
import styles from "../Admin.module.css";

export const OrdersTable = ({ orders, users, updateOrderStatus }) => {
    const getUserInfo = (userId) =>
        users.find((user) => user.id === userId) || {};

    return (
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
                        {orders.map((order) => (
                            <OrderRow
                                key={order.orderId}
                                order={order}
                                user={getUserInfo(order.userId)}
                                updateOrderStatus={updateOrderStatus}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const OrderRow = ({ order, user, updateOrderStatus }) => (
    <tr>
        <UserInfoCell fullName={user.fullName} userId={order.userId} />
        <ContactInfoCell
            email={user.email}
            phone={user.phone}
            birthDate={user.birthDate}
        />
        <OrderDetailsCell
            country={order.country}
            price={order.price}
            date={order.date}
            dateRange={order.dateRange}
            totalGuests={order.totalGuests}
        />
        <StatusCell status={order.adminStatus} />
        <ActionsCell
            status={order.adminStatus}
            onApprove={() => updateOrderStatus(order.orderId, STATUS.APPROVED)}
            onReject={() => updateOrderStatus(order.orderId, STATUS.REJECTED)}
        />
    </tr>
);

const UserInfoCell = ({ fullName, userId }) => (
    <td className={styles.user_info}>
        Full Name: <span className={styles.data}>{fullName || STATUS.NA}</span>
        <br />
        ID: <span className={styles.data}>{userId}</span>
    </td>
);

const ContactInfoCell = ({ email, phone, birthDate }) => (
    <td className={styles.user_info}>
        Email: <span className={styles.data}>{email || STATUS.NA}</span>
        <br />
        Phone: <span className={styles.data}>{phone || STATUS.NA}</span>
        <br />
        Birth: <span className={styles.data}>{birthDate || STATUS.NA}</span>
    </td>
);

const OrderDetailsCell = ({ country, price, date, dateRange, totalGuests }) => (
    <td className={styles.user_info}>
        Country: <span className={styles.data}>{country}</span>
        <br />
        Total price: <span className={styles.data}>${price}</span>
        <br />
        Booking date: <span className={styles.data}>{date}</span>
        <br />
        Booking period:{" "}
        <span className={styles.data}>{dateRange || "N/A"}</span>
        <br />
        Total guest: <span className={styles.data}>{totalGuests || "N/A"}</span>
    </td>
);

const StatusCell = ({ status }) => (
    <td>
        <span
            className={
                status === STATUS.APPROVED
                    ? styles.status_approved
                    : status === STATUS.REJECTED
                    ? styles.status_rejected
                    : styles.status_pending
            }
        >
            {status}
        </span>
    </td>
);

const ActionsCell = ({ status, onApprove, onReject }) => (
    <td>
        {status === STATUS.PENDING && (
            <>
                <button className={styles.approve_btn} onClick={onApprove}>
                    Approve
                </button>
                <button className={styles.reject_btn} onClick={onReject}>
                    Reject
                </button>
            </>
        )}
    </td>
);
