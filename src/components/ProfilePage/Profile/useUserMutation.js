import { useMutation } from "react-query";

export const useUserMutation = (setUserData, setShowRegistrationForm) => {
    return useMutation(
        async (formData) => {
            const userId = localStorage.getItem("userId");
            const responseGet = await fetch(`http://localhost:3000/users/${userId}`);
            if (!responseGet.ok) throw new Error("Failed to get user data");

            const userData = await responseGet.json();
            const updatedData = { ...userData, ...formData };

            const response = await fetch(`http://localhost:3000/users/${userId}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updatedData),
            });

            if (!response.ok) throw new Error("Failed to update user data");
            return response.json();
        },
        {
            onSuccess: (updatedUserData) => {
                setUserData(updatedUserData);
                setShowRegistrationForm(!(updatedUserData.fullName && updatedUserData.birthDate));
            },
            onError: (error) => console.error("Data updating error:", error),
        }
    );
};
