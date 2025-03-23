import styles from "./ProfileCard.module.css";
import avatarDefault from "/userDefaultAvatar.png";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserData } from "./useUserData";
import { useUserMutation } from "./useUserMutation";
import { AuthContext } from "../../../services/AuthContext";
import { formatDate } from "./FormatDate";

export const ProfileCard = () => {
    const { setIsAuth } = useContext(AuthContext);
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        birthDate: "",
        email: "",
        phone: "",
    });

    const [errors, setErrors] = useState({
        email: "",
        phone: "",
    });

    // Получение данных пользователя
    const {
        userData,
        setUserData,
        showRegistrationForm,
        setShowRegistrationForm,
    } = useUserData(navigate);

    const mutation = useUserMutation(setUserData, setShowRegistrationForm);

    // Функция выхода из аккаунта
    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem("isAuth");
        localStorage.removeItem("userId");
        navigate("/login");
    };

    // Валидация email
    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    // Валидация телефона
    const validatePhone = (phone) => {
        const regex = /^\+?\d{11,15}$/;
        return regex.test(phone);
    };

    // Обработчик изменения полей формы
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        // Валидация в реальном времени
        if (name === "email") {
            setErrors((prev) => ({
                ...prev,
                email: validateEmail(value) ? "" : "Invalid email format",
            }));
        } else if (name === "phone") {
            setErrors((prev) => ({
                ...prev,
                phone: validatePhone(value) ? "" : "Invalid phone format",
            }));
        }
    };

    // Обработчик отправки формы
    const handleSubmit = (e) => {
        e.preventDefault();

        // Проверка валидации перед отправкой
        const isEmailValid = validateEmail(formData.email);
        const isPhoneValid = validatePhone(formData.phone);

        if (!isEmailValid || !isPhoneValid) {
            setErrors({
                email: isEmailValid ? "" : "Invalid email format",
                phone: isPhoneValid ? "" : "Invalid phone format",
            });
            return;
        }

        mutation.mutate(formData);
        setIsEditing(false);
    };

    // Обработчик отмены изменений
    const handleCancel = () => {
        setFormData({
            fullName: userData.fullName || "",
            birthDate: userData.birthDate || "",
            email: userData.email || "",
            phone: userData.phone || "",
        });
        setErrors({ email: "", phone: "" });
        setIsEditing(false);
    };

    // Заполнение формы данными пользователя при загрузке
    useEffect(() => {
        if (userData) {
            setFormData({
                fullName: userData.fullName || "",
                birthDate: userData.birthDate || "",
                email: userData.email || "",
                phone: userData.phone || "",
            });
        }
    }, [userData]);

    return (
        <div className={styles.profile_card}>
            <div className={styles.user_info}>
                <div className={styles.user}>
                    <img
                        src={avatarDefault}
                        alt="аватарка"
                        className={styles.user_avatar}
                    />
                    <div className={styles.user_data}>
                        <span className={styles.user_fullname}>
                            {userData.fullName}
                        </span>
                        <span className={styles.user_datas}>
                            {formatDate(userData.birthDate)}
                        </span>
                        <span className={styles.user_datas}>
                            {userData.phone}
                        </span>
                        <span className={styles.user_datas}>
                            {userData.email}
                        </span>
                    </div>
                </div>
                <button className={styles.btn} onClick={logout}>
                    log out
                </button>
            </div>

            <form onSubmit={handleSubmit}>
                <div className={styles.wrapper}>
                    <div className={styles.group}>
                        <div className={styles.input_wrapper}>
                            <label className={styles.label}>Full Name:</label>
                            <input
                                type="text"
                                name="fullName"
                                placeholder="Enter your full name ..."
                                value={formData.fullName}
                                onChange={handleInputChange}
                                disabled={!isEditing}
                                className={
                                    !isEditing
                                        ? styles.input_blocked
                                        : styles.input
                                }
                            />
                        </div>

                        <div className={styles.input_wrapper}>
                            <label className={styles.label}>Email:</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email ..."
                                value={formData.email}
                                onChange={handleInputChange}
                                disabled={!isEditing}
                                className={`${
                                    !isEditing
                                        ? styles.input_blocked
                                        : styles.input
                                } ${errors.email ? styles.input_error : ""}`}
                            />
                            {errors.email && (
                                <p className={styles.error_message}>
                                    {errors.email}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className={styles.group}>
                        <div className={styles.input_wrapper}>
                            <label className={styles.label}>
                                Date of birth:
                            </label>
                            <input
                                type="date"
                                name="birthDate"
                                value={formData.birthDate}
                                onChange={handleInputChange}
                                disabled={!isEditing}
                                className={
                                    !isEditing
                                        ? styles.input_blocked
                                        : styles.input
                                }
                            />
                        </div>

                        <div className={styles.input_wrapper}>
                            <label className={styles.label}>Phone:</label>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Enter your phone ..."
                                value={formData.phone}
                                onChange={handleInputChange}
                                disabled={!isEditing}
                                className={`${
                                    !isEditing
                                        ? styles.input_blocked
                                        : styles.input
                                } ${errors.phone ? styles.input_error : ""}`}
                            />
                            {errors.phone && (
                                <p className={styles.error_message}>
                                    {errors.phone}
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                {!showRegistrationForm && !isEditing ? (
                    <button
                        type="button"
                        className={styles.btn}
                        onClick={() => setIsEditing(true)}
                    >
                        Edit
                    </button>
                ) : (
                    <div className={styles.buttons_container}>
                        <button type="submit" className={styles.btn}>
                            Save
                        </button>
                        <button
                            type="button"
                            className={styles.btn}
                            onClick={handleCancel}
                        >
                            Cancel
                        </button>
                    </div>
                )}
            </form>
        </div>
    );
};
