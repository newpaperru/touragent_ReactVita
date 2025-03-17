import { useState, useEffect } from 'react';

export const useUserData = (navigate) => {
    const [userData, setUserData] = useState(0);
    const [showRegistrationForm, setShowRegistrationForm] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const userId = localStorage.getItem("userId");

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch(`http://localhost:3000/users/${userId}`);
                if (!response.ok) {
                    throw new Error("Не удалось получить данные пользователя");
                }
                const user = await response.json();
                setUserData(user);

                if (user.fullName && user.birthDate) {
                    setShowRegistrationForm(false);
                } else {
                    setShowRegistrationForm(true);
                }
            } catch (error) {
                console.error("Ошибка при загрузке данных:", error);
                setShowRegistrationForm(true);
            } finally {
                setIsLoading(false);
            }
        };

        if (userId) {
            fetchUserData();
        } else {
            navigate("/login");
        }
    }, [userId, navigate]);

    return { userData, setUserData, showRegistrationForm, setShowRegistrationForm, isLoading };
};
