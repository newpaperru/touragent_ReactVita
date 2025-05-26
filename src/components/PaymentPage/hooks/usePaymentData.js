import { useHostelRoomData } from "../../HostelRoomPage/customHooks/useHostelData";
import { useUserData } from "../../ProfilePage/Profile/useUserData";
import { useBookingData } from "../../HostelRoomPage/customHooks/useBookingData";

export const usePaymentData = (hostelId, roomId, navigate) => {
    const { data: hostelData, error } = useHostelRoomData(hostelId, roomId);
    const { userData } = useUserData(navigate);
    const { totalGuests } = useBookingData();

    const cityPrice = Number(hostelData?.tour?.price) || 0;
    const roomCost = Number(hostelData?.room?.cost) || 0;
    const totalCost = cityPrice + totalGuests * roomCost;

    const getDefaultFormValues = () => {
        if (!userData) return {};
        return {
            fullName: userData.fullName || "",
            email: userData.email || "",
            phone: userData.phone || "",
            comment: ""
        };
    };

    return {
        hostelData,
        error,
        totalCost,
        isRefundable: hostelData?.room?.returnPrepayment || false,
        defaultFormValues: getDefaultFormValues(),
        paymentDetails: {
            hostelId,
            roomId,
            totalGuests,
            cityPrice
        }
    };
};