import styles from "../Payment.module.css";

export const PaymentSection = ({ isValid, totalCost, isRefundable }) => {
    return (
        <div className={styles.pay_block}>
            <h2 className={styles.title}>Payment</h2>
            <div className={styles.payment_summary}>
                <span className={styles.total_cost_text}>To payment:</span>
                <span className={styles.total_cost}>{totalCost}$</span>
            </div>

            <div className={styles.pay_btn_wrap}>
                {isRefundable ? (
                    <span>Payment is refundable</span>
                ) : (
                    <span>Payment is not refundable</span>
                )}

                <button
                    type="submit"
                    className={styles.payment_button}
                    disabled={!isValid}
                >
                    To payment {totalCost}$
                </button>
                <p className={styles.agreement}>
                    We will confirm the booking and deduct the specified amount
                    from your card.
                </p>
            </div>
        </div>
    );
};
