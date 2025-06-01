import styles from "./TicketCard.module.css";
import { useTickets } from "./useTickets";
import { PDFGenerator } from "./PDFGenerator";

export const TicketCard = () => {
    const { tickets } = useTickets();

    if (tickets.length === 0) {
        return <div className={styles.no_tickets}>No active tickets</div>;
    }

    return (
        <div className={styles.tickets_container}>
            {tickets.map((ticket) => (
                <div key={ticket.id} className={styles.ticket_card}>
                    <div className={styles.ticket_header}>
                        <h3>
                            {ticket.country ||
                                ticket.paymentData?.booking?.country ||
                                "N/A"}
                        </h3>
                        <div className={styles.user_booking_info}>
                            <div className={styles.detail_row}>
                                <span className={styles.detail_label}>
                                    Date:
                                </span>
                                <span>{ticket.dateRange}</span>
                            </div>
                            <div className={styles.detail_row}>
                                <span className={styles.detail_label}>
                                    Guests:
                                </span>
                                <span>{ticket.totalGuests}</span>
                            </div>
                        </div>
                        <div className={styles.status}>
                            <span
                                className={
                                    ticket.status === "Ready"
                                        ? styles.status_ready
                                        : ticket.status === "Rejected"
                                        ? styles.status_rejected
                                        : ticket.status === "Paid"
                                        ? styles.status_paid
                                        : styles.status_not_paid
                                }
                            >
                                {ticket.status === "Paid"
                                    ? "Waiting for approval"
                                    : ticket.status}
                            </span>
                        </div>
                    </div>

                    <div className={styles.ticket_details}>
                        <div className={styles.detail_row}>
                            <span className={styles.detail_label}>Hostel:</span>
                            <span>
                                {ticket.paymentData?.booking?.hostelTitle ||
                                    "N/A"}
                            </span>
                        </div>
                        <div className={styles.detail_row}>
                            <span className={styles.detail_label}>Room:</span>
                            <span>
                                {ticket.paymentData?.booking?.roomTitle ||
                                    "N/A"}
                            </span>
                        </div>
                        <div className={styles.detail_row}>
                            <span className={styles.detail_label}>
                                Total price:
                            </span>
                            <span>${ticket.price}</span>
                        </div>
                        <div className={styles.detail_row}>
                            <span className={styles.detail_label}>
                                Booking date:
                            </span>
                            <span>{ticket.date}</span>
                        </div>
                    </div>

                    {ticket.status === "Ready" && (
                        <div className={styles.paid_actions}>
                            <PDFGenerator
                                ticket={ticket}
                                userData={ticket.paymentData?.user || {}}
                            />
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};
