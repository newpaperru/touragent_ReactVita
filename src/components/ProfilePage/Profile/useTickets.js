import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useTickets = () => {
    const [tickets, setTickets] = useState([]);
    const navigate = useNavigate();
    

    // Загрузка билетов при монтировании
    useEffect(() => {
        const savedTickets = JSON.parse(localStorage.getItem("tickets")) || [];
        setTickets(savedTickets);
    }, []);

    // Проверка наличия тура в корзине
    const isTourInCart = (packageData) => {
        return tickets.some(ticket => 
            ticket.country === packageData.country && 
            ticket.price === packageData.price
        );
    };

    // Добавление билета
    const addTicket = (packageData) => {
        const newTicket = {
            id: Date.now().toString(),
            country: packageData.country,
            price: packageData.price,
            status: "Not paid",
            date: new Date().toISOString().split("T")[0]
        };

        const updatedTickets = [...tickets, newTicket];
        setTickets(updatedTickets);
        localStorage.setItem("tickets", JSON.stringify(updatedTickets));
        return newTicket;
    };

    // Обновление статуса билета
    const updateTicketStatus = (ticketId, newStatus) => {
        const updatedTickets = tickets.map(ticket => 
            ticket.id === ticketId ? { ...ticket, status: newStatus } : ticket
        );
        setTickets(updatedTickets);
        localStorage.setItem("tickets", JSON.stringify(updatedTickets));
    };

    // Перенаправление в профиль
    const goToProfile = () => {
        navigate("/profile");
    };

    return { 
        tickets, 
        addTicket, 
        isTourInCart, 
        goToProfile, 
        updateTicketStatus 
    };
};