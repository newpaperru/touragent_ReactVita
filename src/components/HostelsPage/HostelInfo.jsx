import { useParams } from "react-router-dom";
import { useState } from "react";
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
import { useHostelRoomData } from "../HostelRoomPage/customHooks/useHostelData";

export const HostelInfo = () => {
    const { hostelId } = useParams();
    const { data, error } = useHostelRoomData(hostelId);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    if (error) return <div>Error: {error}</div>;
    if (!data || data.type !== "hostel") return <div>Hostel not found</div>;

    const hostel = data.data;

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
