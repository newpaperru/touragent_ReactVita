import styles from "./Circle.module.css";
import { useEffect, useState } from "react";
import { useInView } from "./useInView";

// Градиенты для круга
const gradients = [
    {
        id: "g1",
        stops: [
            { offset: "0%", stopColor: "#10E7FF" },
            { offset: "100%", stopColor: "#8437FF" },
        ],
    },
    {
        id: "g2",
        stops: [
            { offset: "0%", stopColor: "#FFB47D" },
            { offset: "100%", stopColor: "#FF4098" },
        ],
    },
    {
        id: "g3",
        stops: [
            { offset: "0%", stopColor: "#D820F9" },
            { offset: "100%", stopColor: "#7202FF" },
        ],
    },
];

// Вспомогательные функции для расчетов
const calculateRadius = (size, strokeWidth) => (size - strokeWidth) / 2;
const calculateCircumference = (radius) => 2 * Math.PI * radius;
const calculateOffset = (circumference, percent) =>
    circumference - (percent / 100) * circumference;

export const Circle = ({
    percent,
    size = 155,
    strokeWidth = 15,
    gradientId,
    text,
}) => {
    const [animatedPercent, setAnimatedPercent] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const [ref, isInView] = useInView({ threshold: 0.5 });

    const radius = calculateRadius(size, strokeWidth);
    const circumference = calculateCircumference(radius);
    const offset = calculateOffset(circumference, animatedPercent);

    useEffect(() => {
        if (!isInView || hasAnimated) return;

        let start = null;
        const duration = 1000;

        const animate = (timestamp) => {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const currentPercent = Math.min(
                (progress / duration) * percent,
                percent
            );
            setAnimatedPercent(currentPercent);

            if (progress < duration) {
                requestAnimationFrame(animate);
            } else {
                setHasAnimated(true);
            }
        };

        requestAnimationFrame(animate);
    }, [isInView, percent, hasAnimated]);

    return (
        <div className={styles.circles}>
            <svg
                ref={ref}
                width={size}
                height={size}
                className={styles.circle}
            >
                <defs>
                    {gradients.map((gradient) => (
                        <linearGradient
                            key={gradient.id}
                            id={gradient.id}
                            gradientUnits="userSpaceOnUse"
                            x1="-0.95%"
                            y1=".99%"
                            x2="100.95%"
                            y2="99.01%"
                        >
                            {gradient.stops.map((stop, index) => (
                                <stop
                                    key={index}
                                    offset={stop.offset}
                                    stopColor={stop.stopColor}
                                />
                            ))}
                        </linearGradient>
                    ))}
                </defs>

                {/* Фоновый круг */}
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke="#e0e0e0"
                    strokeWidth={strokeWidth}
                    fill="none"
                />

                {/* Анимированный круг */}
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke={`url(#${gradientId})`}
                    strokeWidth={strokeWidth}
                    fill="none"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                />

                {/* Текст с процентом */}
                <text
                    x="50%"
                    y="50%"
                    transform="rotate(90, 60, 60)"
                    textAnchor="middle"
                    fontFamily="var(--text-font-family-regular)"
                    fontSize="40px"
                    color="#525252"
                    dy="-0.4em"
                >
                    {Math.round(animatedPercent)}%
                </text>
            </svg>
            <span className={styles.text}>{text}</span>
        </div>
    );
};
