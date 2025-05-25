import { useParams } from "react-router-dom";
import styles from "./Payment.module.css";
import { useHostelRoomData } from "../HostelRoomPage/customHooks/useHostelData";

export const Payment = () => {
    const { hostelId, roomId } = useParams();
    const { data, error } = useHostelRoomData(hostelId, roomId);

    if (error) return <div>Error: {error}</div>;
    if (!data) return <div>Loading...</div>;

    return (
        <div className={styles.payment}>
            <h1>{data.hostel.title}</h1>
        </div>
    );
};
