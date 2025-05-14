import { useState } from "react";
import styles from "../HostelInfo.module.css";

export const ImageModal = ({ isOpen, onClose, images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!isOpen) return null;

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    return (
        <div className={styles.modal_overlay} onClick={onClose}>
            <div
                className={styles.modal_content}
                onClick={(e) => e.stopPropagation()}
            >
                <button className={styles.close_button} onClick={onClose}>
                    &times;
                </button>

                <img
                    src={images[currentIndex]}
                    alt={`Hostel image ${currentIndex + 1}`}
                    className={styles.fullsize_image}
                />

                {images.length > 1 && (
                    <>
                        <button
                            className={styles.modal_arrow_left}
                            onClick={(e) => {
                                e.stopPropagation();
                                prevSlide();
                            }}
                        >
                            &lt;
                        </button>
                        <button
                            className={styles.modal_arrow_right}
                            onClick={(e) => {
                                e.stopPropagation();
                                nextSlide();
                            }}
                        >
                            &gt;
                        </button>

                        <div className={styles.modal_pagination}>
                            {currentIndex + 1} / {images.length}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};
