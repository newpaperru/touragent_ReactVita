import { useState, useEffect } from 'react';

export const useUserData = (navigate) => {
    const [userData, setUserData] = useState(0);
    const [showRegistrationForm, setShowRegistrationForm] = useState(true);
    const userId = localStorage.getItem("userId");

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch(`http://localhost:3000/users/${userId}`);
                if (!response.ok) {
                    throw new Error("Failed to get user data");
                }
                const user = await response.json();
                setUserData(user);

                if (user.fullName && user.birthDate) {
                    setShowRegistrationForm(false);
                }
            } catch (error) {
                console.error("Data loading error:", error);
            }
        };

        if (userId) {
            fetchUserData();
        } else {
            navigate("/login");
        }
    }, [userId, navigate]);

    return { userData, setUserData, showRegistrationForm, setShowRegistrationForm };
};
