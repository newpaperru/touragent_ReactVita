import { useMutation } from "react-query"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../../services/AuthContext";
import { useContext, useEffect } from "react";

export function useLoginForm({ onErrorCustom } = {}) {
    const navigate = useNavigate();
    const { setIsAuth } = useContext(AuthContext);

    useEffect(() => {
        const isAuthenticated = localStorage.getItem("isAuth") === "true";
        if (isAuthenticated) {
            setIsAuth(true);
        }
    }, [setIsAuth]);

    const loginUser = async ({ email, password }) => {
        const response = await fetch(
            `http://localhost:3000/users?email=${encodeURIComponent(
                email
            )}&password=${encodeURIComponent(password)}`
        );
        if (!response.ok) {
            throw new Error("Server error");
        }
        const data = await response.json();
        if (data.length === 0) {
            throw new Error("Неверный email или пароль");
        }
        return data[0];
    };

    return useMutation(loginUser, {
        onSuccess: (userData) => {
            setIsAuth(true);
            localStorage.setItem("isAuth", "true");
            localStorage.setItem("userId", userData.id);
            navigate("/profile");
        },
        onError: (error) => {
            if (onErrorCustom) {
                onErrorCustom(error);
            }
        },
    });
}