import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Footer } from "../Footer/Footer";
import { TopHeader } from "../Header/TopHeader/TopHeader";
import stylesHeader from "../../components/Header/TopHeader/TopHeader.module.css";
import styles from "./HostelInfo.module.css";

import { RecommendBadge } from "./HostelInfo_elements/RecommendBadge";
import { ReviewsSection } from "./HostelInfo_elements/ReviewsSection";
import { LocationSection } from "./HostelInfo_elements/LocationSection";
import { FacilitiesSection } from "./HostelInfo_elements/FacilitiesSection";
import { ProgressBars } from "./HostelInfo_elements/ProgressBars";
import { ImageModal } from "./HostelInfo_elements/ImageModal";
import { HostelSlider } from "./HostelInfo_elements/HostelSlider";
import { FormSection } from "./HostelInfo_elements/FormSection";

export const HostelInfo = () => {
    const { hostelId } = useParams();
    const [hostel, setHostel] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

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

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    if (!hostel) return <div>Hostel not found</div>;

    return (
        <>
            <TopHeader theme={stylesHeader.dark_theme} handColorSvg="dark" />
            <div className={styles.hostel_info}>
                <div className={styles.container}>
                    <HostelSlider
                        images={hostel.hostelImages}
                        onImageClick={openModal}
                        isModalOpen={isModalOpen}
                    />

                    <div className={styles.main_info}>
                        {hostel.recomm && <RecommendBadge />}

                        <span className={styles.title}>
                            {hostel.hostelTitle}
                        </span>

                        <ReviewsSection
                            scoreReviews={hostel.scoreReviews}
                            countReviews={hostel.countReviews}
                        />

                        <LocationSection address={hostel.hostelAddress} />

                        {/* TODO: Сделать выборку даты, взрослый/ребенок количество */}

                        <FacilitiesSection facilities={hostel.facilities} />

                        <div className={styles.reviews_details}>
                            <div className={styles.reviews_wrap}>
                                <div className={styles.score_reviews}>
                                    {hostel.scoreReviews}
                                </div>
                                <span className={styles.count_rewiews}>
                                    {hostel.countReviews} reviews
                                </span>
                            </div>

                            <ProgressBars reviews_bars={hostel.reviews_bars} />

                            {/* TODO: Сделать отзывы */}
                        </div>
                        <FormSection />
                    </div>
                </div>
            </div>

            <ImageModal
                isOpen={isModalOpen}
                onClose={closeModal}
                images={hostel.hostelImages}
            />

            <Footer />
        </>
    );
};
