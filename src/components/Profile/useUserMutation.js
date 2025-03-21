import { useMutation } from 'react-query';

export const useUserMutation = (setUserData, setShowRegistrationForm, reset) => {
    return useMutation(
        async (formData) => {
            const userId = localStorage.getItem("userId");

            const responseGet = await fetch(`http://localhost:3000/users/${userId}`);
            if (!responseGet.ok) {
                throw new Error("Failed to get user data");
            }
            const userData = await responseGet.json();

            const updatedData = {
                ...userData,
                ...formData,
            };

            const response = await fetch(`http://localhost:3000/users/${userId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedData),
            });

            if (!response.ok) {
                throw new Error("Failed to update user data");
            }

            return response.json();
        },
        {
            onSuccess: (updatedUserData) => {
                setUserData(updatedUserData);
                reset();
                if (updatedUserData.fullName && updatedUserData.birthDate) {
                    setShowRegistrationForm(false);
                }
            },
            onError: (error) => {
                console.error("Data updating error:", error);
            },
        }
    );
};