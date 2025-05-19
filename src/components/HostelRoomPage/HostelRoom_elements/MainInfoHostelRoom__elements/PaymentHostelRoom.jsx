import styles from "../../HosteRoom.module.css";

export const PaymentHostelRoom = ({ cost, breakfast, payment }) => {
    return (
        <div className={styles.payment_hostel_room}>
            <span className={styles.cost}>{cost}$</span>
            {breakfast === true ? (
                <span className={`${styles.breakfast} ${styles.active}`}>
                    Breakfast is included
                </span>
            ) : (
                <span className={styles.breakfast}>
                    Breakfast is not included
                </span>
            )}
            {payment === false ? (
                <span className={`${styles.payment} ${styles.active}`}>
                    Payment is not refundable
                </span>
            ) : (
                <span className={styles.payment}>Payment is refundable</span>
            )}
        </div>
    );
};
