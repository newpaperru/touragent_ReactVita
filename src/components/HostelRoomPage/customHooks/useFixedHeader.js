import { useState, useEffect, useRef } from 'react';

export const useFixedHeader = () => {
    const [isFixed, setIsFixed] = useState(false);
    const headerRef = useRef(null);
    const prevScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!headerRef.current) return;

            const currentScrollY = window.scrollY;
            const headerOriginalPosition = headerRef.current.offsetTop;

            if (currentScrollY > headerOriginalPosition) {
                if (!isFixed) setIsFixed(true);
            } else if (isFixed) {
                setIsFixed(false);
            }

            prevScrollY.current = currentScrollY;
        };

        const throttledScroll = () => {
            window.requestAnimationFrame(handleScroll);
        };

        window.addEventListener('scroll', throttledScroll);
        return () => window.removeEventListener('scroll', throttledScroll);
    }, [isFixed]);

    return { isFixed, headerRef };
};