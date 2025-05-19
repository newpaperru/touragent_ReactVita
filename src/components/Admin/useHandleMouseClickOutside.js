import { useRef, useEffect } from "react";


// TODO: useState вынести через return 1 элемент
export const useHandleMouseClickOutside = ({props = false}) => {
    const wrapperRef = useRef(null);

    return useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                wrapperRef.current &&
                !wrapperRef.current.contains(event.target)
            ) {
                props
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [props]);
}