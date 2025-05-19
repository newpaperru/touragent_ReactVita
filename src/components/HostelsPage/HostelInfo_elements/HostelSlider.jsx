import { useState, useEffect, useRef } from "react";
import styles from "../HostelInfo.module.css";

export const HostelSlider = ({ images, onImageClick, isModalOpen }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [direction, setDirection] = useState("right");
    const intervalRef = useRef(null);

    // Автопрокрутка с учетом модального окна
    useEffect(() => {
        if (images.length <= 1 || isPaused || isModalOpen) {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null; 
            }
            return;
        }

        intervalRef.current = setInterval(() => {
            setDirection("right");
            setCurrentIndex((prev) =>
                prev === images.length - 1 ? 0 : prev + 1
            );
        }, 5000);

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [images.length, isPaused, currentIndex, isModalOpen]);

    const goToSlide = (newIndex, dir) => {
        setDirection(dir);
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        goToSlide(
            currentIndex === images.length - 1 ? 0 : currentIndex + 1,
            "right"
        );
    };

    const prevSlide = () => {
        goToSlide(
            currentIndex === 0 ? images.length - 1 : currentIndex - 1,
            "left"
        );
    };

    // Пауза при наведении
    const handleMouseEnter = () => setIsPaused(true);
    const handleMouseLeave = () => setIsPaused(false);

    return (
        <div
            className={styles.slider_container}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className={styles.slider_wrapper}>
                {images.map((img, index) => (
                    <div
                        key={index}
                        className={`${styles.slide} ${
                            index === currentIndex ? styles.active : ""
                        } ${
                            index === currentIndex
                                ? styles[`slide-${direction}`]
                                : ""
                        }`}
                    >
                        <img
                            src={img}
                            alt={`Hostel ${index + 1}`}
                            className={styles.slider_image}
                            onClick={onImageClick}
                        />
                    </div>
                ))}

                {/* Пагинация */}
                {images.length > 1 && (
                    <div className={styles.overlay_pagination}>
                        <div className={styles.pagination_line_bg}>
                            <div
                                className={styles.pagination_line_fill}
                                style={{
                                    width: `${
                                        ((currentIndex + 1) / images.length) *
                                        100
                                    }%`,
                                }}
                            />
                        </div>
                    </div>
                )}

                {images.length > 1 && (
                    <>
                        <button
                            className={styles.slider_arrow_left}
                            onClick={(e) => {
                                e.stopPropagation();
                                prevSlide();
                            }}
                        >
                            &lt;
                        </button>
                        <button
                            className={styles.slider_arrow_right}
                            onClick={(e) => {
                                e.stopPropagation();
                                nextSlide();
                            }}
                        >
                            &gt;
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};
