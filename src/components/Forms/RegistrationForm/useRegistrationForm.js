import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";

export function useRegistrationForm(apiUrl = "http://localhost:3000/users") {
    const {
        register,
        handleSubmit,
        watch,
        setError,
        formState: { errors }
    } = useForm();

    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const checkUserExistence = async (data) => {
        const { email, phone } = data;

        const emailResponse = await fetch(`${apiUrl}?email=${encodeURIComponent(email)}`);
        const emailData = await emailResponse.json();

        const phoneResponse = await fetch(`${apiUrl}?phone=${encodeURIComponent(phone)}`);
        const phoneData = await phoneResponse.json();

        return {
            emailExists: emailData.length > 0,
            phoneExists: phoneData.length > 0
        };
    };

    const mutation = useMutation(
        async (newUser) => {
            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newUser)
            });
            if (!response.ok) {
                throw new Error("Error when registering");
            }
            return await response.json();
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries("users");
                navigate("/login");
            }
        }
    );

    const onSubmit = async (data) => {
        try {
            const { emailExists, phoneExists } = await checkUserExistence(data);

            let hasError = false;
            switch (true) {
                case emailExists && phoneExists:
                    setError("email", {
                        type: "manual",
                        message: "User with this email is already registered"
                    });
                    setError("phone", {
                        type: "manual",
                        message: "User with this phone is already registered"
                    });
                    hasError = true;
                    break;

                case emailExists:
                    setError("email", {
                        type: "manual",
                        message: "User with this email is already registered"
                    });
                    hasError = true;
                    break;

                case phoneExists:
                    setError("phone", {
                        type: "manual",
                        message: "User with this phone is already registered"
                    });
                    hasError = true;
                    break;

                default:
                    break;
            }

            // Если найдены ошибки, прерываем отправку данных
            if (hasError) {
                return;
            }

            // Если проверка пройдена, отправляем данные нового пользователя
            mutation.mutate(data);
        } catch (error) {
            console.error("User check error", error);
        }
    };

    return { register, handleSubmit, watch, onSubmit, mutation, errors };
}