// pages/PaymentPage.jsx
import { Footer } from "../components/Footer/Footer";
import { TopHeader } from "../components/Header/TopHeader/TopHeader";
import stylesHeader from "../components/Header/TopHeader/TopHeader.module.css";
import { Payment } from "../components/PaymentPage/Payment";
import { useParams, useSearchParams } from "react-router-dom";
import { useHostelRoomData } from "../components/HostelRoomPage/customHooks/useHostelData";
import { useFixedHeader } from "../components/HostelRoomPage/customHooks/useFixedHeader";
import { PaymentHeader } from "../components/PaymentPage/PaymentHeader";

export const PaymentPage = () => {
    const { hostelId } = useParams();
    const { data, error } = useHostelRoomData(hostelId);
    const { isFixed, headerRef } = useFixedHeader();
    const [searchParams] = useSearchParams();

    if (error) return <div>Error: {error}</div>;
    if (!data || data.type !== "hostel") return <div>Hostel not found</div>;

    return (
        <>
            <TopHeader theme={stylesHeader.dark_theme} handColorSvg="dark" />
            <div ref={headerRef} style={{ height: isFixed ? 0 : "auto" }}>
                {!isFixed && (
                    <PaymentHeader
                        header_data={data.data.hostelTitle}
                        searchParams={searchParams}
                    />
                )}
            </div>
            {isFixed && (
                <PaymentHeader
                    header_data={data.data.hostelTitle}
                    isFixed
                    searchParams={searchParams}
                />
            )}
            <Payment />
            <Footer />
        </>
    );
};
