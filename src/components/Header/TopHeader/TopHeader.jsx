import { useLocation, Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../../../services/AuthContext';
import { useContext } from 'react';
import styles from "./TopHeader.module.css";
import Logo from "../../../assets/Icons/logo.svg?react";

export const TopHeader = ({theme, handColorSvg = "light"}) => {
    // Получаем текущий путь
    const location = useLocation();
    const navigate = useNavigate();
    const { isAuth } = useContext(AuthContext);

    // Массив ссылок меню
    const links = [
        { id: 1, label: "Home", to: "/" },
        { id: 2, label: "About", to: "/about" },
        { id: 3, label: "Search", to: "/search" },
    ];

    return (
        <div className={styles.container}>
            <Logo fill={handColorSvg === 'dark' ? '#181E4B' : '#fff'} />
            <nav>
                {links.map((link) => (
                    <Link
                        key={link.id}
                        to={link.to}
                        className={`${theme} ${
                            location.pathname === link.to
                                ? styles.underline
                                : ""
                        }`}
                    >
                        {link.label}
                    </Link>
                ))}
            </nav>
            <button
                type="button"
                className={styles.button_login}
                onClick={() => navigate(isAuth ? "/profile" : "/login")}
            >
                {isAuth ? "Go to profile" : "Login"}
            </button>
        </div>
    );
};