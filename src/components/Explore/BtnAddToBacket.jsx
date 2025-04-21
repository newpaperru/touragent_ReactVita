import { useTickets } from "../ProfilePage/Profile/useTickets";
import { useState, useContext } from "react";
import { AuthContext } from "../../services/AuthContext";
import "./common.css"

export const BtnAddToBacket = ({ packageData }) => {
    const { addTicket, isTourInCart, goToProfile } = useTickets();
    const [isAdded, setIsAdded] = useState(false);
    const { userRole } = useContext(AuthContext);

    const handleButtonClick = () => {
        if (!packageData) return;
        
        if (!isTourInCart(packageData)) {
            addTicket(packageData);
            setIsAdded(true);
        }
        goToProfile();
    };

    const buttonText =
        userRole === "admin"
            ? "User access only"
            : !packageData
            ? "Loading..."
            : isAdded || isTourInCart(packageData)
            ? "Go to the basket"
            : "Book Now";

    return (
        <button
            disabled={userRole === "admin" || !packageData}
            className={"btn"}
            onClick={handleButtonClick}
        >
            {buttonText}
        </button>
    );
};