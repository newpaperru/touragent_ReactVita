import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useTickets = () => {
    const [tickets, setTickets] = useState([]);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const savedTickets = JSON.parse(localStorage.getItem("tickets")) || [];
        const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
        setTickets(savedTickets);
        setOrders(savedOrders);
    }, []);

    const isTourInCart = (packageData) => {
        return tickets.some(ticket =>
            ticket.country === packageData.country &&
            ticket.price === packageData.price
        );
    };

    const addTicket = (packageData) => {
        const newTicket = {
            id: Date.now().toString(),
            country: packageData.country,
            price: packageData.price,
            status: "Paid",
            date: new Date().toISOString().split("T")[0],
            userId: localStorage.getItem("userId"),
            paymentData: packageData.paymentData,
            dateRange: packageData.dateRange,
            totalGuests: packageData.totalGuests,
        };

        const updatedTickets = [...tickets, newTicket];
        setTickets(updatedTickets);
        localStorage.setItem("tickets", JSON.stringify(updatedTickets));

        const newOrder = {
            ...newTicket,
            orderId: Date.now().toString(),
            ticketId: newTicket.id,
            adminStatus: "Pending",
        };
        const updatedOrders = [...orders, newOrder];
        setOrders(updatedOrders);
        localStorage.setItem("orders", JSON.stringify(updatedOrders));

        return newTicket;
    };

    const updateTicketStatus = (ticketId, newStatus) => {
        const updatedTickets = tickets.map(ticket =>
            ticket.id === ticketId ? { ...ticket, status: newStatus } : ticket
        );
        setTickets(updatedTickets);
        localStorage.setItem("tickets", JSON.stringify(updatedTickets));

        if (newStatus === "Paid") {
            const ticket = tickets.find(t => t.id === ticketId);
            if (ticket) {
                const newOrder = {
                    ...ticket,
                    orderId: Date.now().toString(),
                    ticketId: ticket.id,
                    adminStatus: "Pending"
                };
                const updatedOrders = [...orders, newOrder];
                setOrders(updatedOrders);
                localStorage.setItem("orders", JSON.stringify(updatedOrders));
            }
        }
    };

    const updateOrderStatus = (orderId, status) => {
        const updatedOrders = orders.map(order =>
            order.orderId === orderId ? { ...order, adminStatus: status } : order
        );
        setOrders(updatedOrders);
        localStorage.setItem("orders", JSON.stringify(updatedOrders));

        // Обновляем соответствующий билет
        const order = orders.find(o => o.orderId === orderId);
        if (order) {
            const updatedTickets = tickets.map(ticket =>
                ticket.id === order.ticketId ? {
                    ...ticket,
                    status: status === "Approved" ? "Ready" : "Rejected"
                } : ticket
            );
            setTickets(updatedTickets);
            localStorage.setItem("tickets", JSON.stringify(updatedTickets));
        }
    };

    const goToProfile = () => {
        navigate("/profile");
    };

    return {
        tickets,
        orders,
        addTicket,
        isTourInCart,
        goToProfile,
        updateTicketStatus,
        updateOrderStatus
    };
};