import styles from "./TicketCard.module.css";
import { useTickets } from "./useTickets";

export const TicketCard = () => {
    const { tickets, updateTicketStatus } = useTickets();

    const handlePay = (ticketId) => {
        updateTicketStatus(ticketId, "Paid"); // Обновляем статус на "Paid"
    };

    if (tickets.length === 0) {
        return <div className={styles.no_tickets}>No active tickets</div>;
    }

    return (
        <div className={styles.ticket_card}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Country</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {tickets.map((ticket) => (
                        <tr key={ticket.id}>
                            <td>{ticket.country}</td>
                            <td>${ticket.price}</td>
                            <td className={styles.status_progress}>{ticket.status}</td>
                            <td>{ticket.date}</td>
                            <td>
                                {ticket.status === "Not paid" ? (
                                    <button 
                                        className={styles.pay_btn}
                                        onClick={() => handlePay(ticket.id)}
                                    >
                                        Pay
                                    </button>
                                ) : (
                                    <span className={styles.paid_text}>Paid</span>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};