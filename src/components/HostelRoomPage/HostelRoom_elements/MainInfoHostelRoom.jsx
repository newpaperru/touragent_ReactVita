import { Link, useSearchParams } from "react-router-dom";
import { FacilitiesSection } from "../../HostelsPage/HostelInfo_elements/FacilitiesSection";
import styles from "../HosteRoom.module.css";
import { InfoHostelRoom } from "./MainInfoHostelRoom__elements/InfoHostelRoom";
import { PaymentHostelRoom } from "./MainInfoHostelRoom__elements/PaymentHostelRoom";

export const MainInfoHostelRoom = ({ hostel, id }) => {
    const rooms = hostel.hostelRooms;
    const [searchParams] = useSearchParams();

    return (
        <>
            {rooms.map((room, index) => (
                <div className={styles.main_info_hostel_room} key={index}>
                    <img
                        src={room.roomImg}
                        alt={room.roomTitle}
                        className={styles.img}
                    />
                    <div className={styles.info}>
                        <InfoHostelRoom
                            title={room.roomTitle}
                            square={room.square}
                            beds={room.beds}
                        />
                        <FacilitiesSection facilities={room.facilities} />
                        <PaymentHostelRoom
                            cost={room.roomCost}
                            breakfast={room.breakfast}
                            payment={room.returnPrepayment}
                        />
                        <Link
                            to={{
                                pathname: `/hostels/${id}/payment/${room.roomId}`,
                                search: searchParams.toString(),
                            }}
                            className={styles.room_btn}
                        >
                            Choose
                        </Link>
                    </div>
                </div>
            ))}
        </>
    );
};
