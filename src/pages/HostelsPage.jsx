import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Footer } from "../components/Footer/Footer";
import { TopHeader } from "../components/Header/TopHeader/TopHeader";
import styles from "../components/Header/TopHeader/TopHeader.module.css";
import { Hostels } from "../components/HostelsPage/Hostels";

export const HostelsPage = () => {
    const { id } = useParams();
    const [hostels, setHostels] = useState([]);

    useEffect(() => {
        const fetchHostels = async () => {
            try {
                const response = await fetch(
                    `http://localhost:3000/archive/${id}`
                );
                const data = await response.json();
                const hostelsData = Array.isArray(data.hostels)
                    ? data.hostels
                    : [];
                setHostels(hostelsData);
            } catch (error) {
                console.error("Error fetching hostels:", error);
            }
        };

        fetchHostels();
    }, [id]);

    if (!hostels.length) return <div>No hostels available</div>;

    return (
        <>
            <TopHeader theme={styles.dark_theme} handColorSvg="dark" />
            <Hostels hostels={hostels} />
            <Footer />
        </>
    );
};
