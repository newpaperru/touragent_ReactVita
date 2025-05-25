import { useParams } from "react-router-dom";
import styles from "./HosteRoom.module.css";
import stylesHeader from "../../components/Header/TopHeader/TopHeader.module.css";
import { HeaderHostelRoom } from "./HostelRoom_elements/HeaderHostelRoom";
import { TopHeader } from "../Header/TopHeader/TopHeader";
import { Footer } from "../Footer/Footer";
import { MainInfoHostelRoom } from "./HostelRoom_elements/MainInfoHostelRoom";
import { useHostelRoomData } from "./customHooks/useHostelData";
import { useFixedHeader } from "./customHooks/useFixedHeader";

export const HostelRoom = () => {
    const { hostelId } = useParams();
    const { data, error } = useHostelRoomData(hostelId);
    const { isFixed: isHeaderFixed, headerRef } = useFixedHeader();

    if (error) return <div>Error: {error}</div>;
    if (!data || data.type !== 'hostel') return <div>Hostel not found</div>;

    return (
        <>
            <TopHeader theme={stylesHeader.dark_theme} handColorSvg="dark" />
            <div ref={headerRef} style={{ height: isHeaderFixed ? 0 : 'auto' }}>
                {!isHeaderFixed && (
                    <HeaderHostelRoom header_data={data.data.hostelTitle} />
                )}
            </div>
            {isHeaderFixed && (
                <HeaderHostelRoom 
                    header_data={data.data.hostelTitle} 
                    isFixed 
                />
            )}
            <div className={styles.hostel_room}>
                <MainInfoHostelRoom hostel={data.data} id={hostelId}/>
            </div>
            <Footer />
        </>
    );
};