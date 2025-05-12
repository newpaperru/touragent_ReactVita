import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { Footer } from "../Footer/Footer";
import { TopHeader } from "../Header/TopHeader/TopHeader";
import stylesHeader from "../../components/Header/TopHeader/TopHeader.module.css";
import styles from "./HostelInfo.module.css";

import Icon_recomm from "../../assets/Icons/icon_recomm.svg?react";
import Map_marker from "../../assets/Icons/map-marker.svg?react";

export const HostelInfo = () => {
    const { hostelId } = useParams();
    const [hostel, setHostel] = useState(null);

    useEffect(() => {
        const fetchHostel = async () => {
            try {
                const response = await fetch(`http://localhost:3000/archive`);
                const tours = await response.json();

                let foundHostel = null;
                for (const tour of tours) {
                    if (tour.hostels && Array.isArray(tour.hostels)) {
                        const matchingHostel = tour.hostels.find(
                            (h) => h.id === hostelId
                        );
                        if (matchingHostel) {
                            foundHostel = matchingHostel;
                            break;
                        }
                    }
                }

                setHostel(foundHostel);
            } catch (error) {
                console.error("Error fetching hostel:", error);
            }
        };

        fetchHostel();
    }, [hostelId]);

    if (!hostel) return <div>Hostel not found</div>;

    return (
        <>
            <TopHeader theme={stylesHeader.dark_theme} handColorSvg="dark" />
            <div className={styles.hostel_info}>
                <div className={styles.container}>
                    {hostel.recomm === true ? (
                        <div className={styles.block_recomm}>
                            <div className={styles.block_inner}>
                                <Icon_recomm /> We recommend
                            </div>
                        </div>
                    ) : (
                        ""
                    )}
                    <span className={styles.title}>{hostel.hostelTitle}</span>
                    <div className={styles.reviews}>
                        <div className={styles.score_reviews}>{hostel.scoreReviews}</div>
                        <span className={styles.count_rewiews}>{hostel.countReviews} reviews</span>
                    </div>
                    <div className={styles.place}>
                        <span className={styles.title}>Where is it?</span>
                        <div className={styles.place_info}>
                            <Map_marker />
                            <p className={styles.address}>{hostel.hostelAddress}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};
