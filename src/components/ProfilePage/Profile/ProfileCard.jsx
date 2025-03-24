import styles from "./ProfileCard.module.css";
import avatarDefault from "/userDefaultAvatar.png";
import Calender from "../../../assets/Icons/calenderDateIcon.svg?react";
import Phone from "../../../assets/Icons/phoneIcon.svg?react";
import Email from "../../../assets/Icons/emailIcon.svg?react";

import { useContext, useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useUserData } from "./useUserData";
import { useUserMutation } from "./useUserMutation";
import { AuthContext } from "../../../services/AuthContext";
import { formatDate } from "./FormatDate";
import { useValidation } from "./useValidation";

const InputField = ({
    label,
    name,
    type = "text",
    value,
    error,
    isEditing,
    onChange,
    placeholder,
    Icon,
    ...props
}) => (
    <div className={styles.input_wrapper}>
        <label className={styles.label}>{label}</label>
        <div className={styles.input_container}>
            {Icon && <Icon className={styles.input_icon} />}
            <input
                {...props}
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                disabled={!isEditing}
                className={`${styles.input} ${
                    !isEditing ? styles.input_blocked : ""
                } ${error ? styles.input_error : ""} ${
                    Icon ? styles.with_icon : ""
                }`}
            />
        </div>
        {error && <p className={styles.error_message}>{error}</p>}
    </div>
);

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
    const [errors, setErrors] = useState({});
    const { validateField } = useValidation();

    const {
        userData,
        setUserData,
        showRegistrationForm,
        setShowRegistrationForm,
    } = useUserData(navigate);
    const mutation = useUserMutation(setUserData, setShowRegistrationForm);

    const logout = useCallback(() => {
        setIsAuth(false);
        localStorage.removeItem("isAuth");
        localStorage.removeItem("userId");
        navigate("/login");
    }, [setIsAuth, navigate]);

    const handleInputChange = useCallback(
        ({ target: { name, value } }) => {
            setFormData((prev) => ({ ...prev, [name]: value }));
            if (errors[name]) validateField(name, value, setErrors);
        },
        [errors, validateField]
    );

    const handleSubmit = useCallback(
        (e) => {
            e.preventDefault();
            const isValid = Object.entries(formData).every(([key, value]) =>
                key === "birthDate"
                    ? true
                    : validateField(key, value, setErrors)
            );

            if (!isValid) return;
            mutation.mutate(formData);
            setIsEditing(false);
        },
        [formData, mutation, validateField]
    );

    const handleCancel = useCallback(() => {
        setFormData({
            fullName: userData.fullName || "",
            birthDate: userData.birthDate || "",
            email: userData.email || "",
            phone: userData.phone || "",
        });
        setErrors({});
        setIsEditing(false);
    }, [userData]);

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
                            {userData.birthDate && (
                                <Calender fill="rgba(0, 0, 0, 0.26)" />
                            )}
                            {formatDate(userData.birthDate)}
                        </span>
                        <span className={styles.user_datas}>
                            <Phone fill="rgba(0, 0, 0, 0.26)" />
                            {userData.phone}
                        </span>
                        <span className={styles.user_datas}>
                            <Email fill="rgba(0, 0, 0, 0.26)" />
                            {userData.email}
                        </span>
                    </div>
                </div>
                <button className={styles.btn} onClick={logout}>
                    Log out
                </button>
            </div>

            <form onSubmit={handleSubmit}>
                <div className={styles.wrapper}>
                    <div className={styles.group}>
                        <InputField
                            label="Full Name:"
                            name="fullName"
                            value={formData.fullName}
                            error={errors.fullName}
                            isEditing={isEditing}
                            onChange={handleInputChange}
                            placeholder="Enter your full name ..."
                        />
                        <InputField
                            label="Email:"
                            name="email"
                            type="email"
                            value={formData.email}
                            error={errors.email}
                            isEditing={isEditing}
                            onChange={handleInputChange}
                            placeholder="Enter your email ..."
                        />
                    </div>
                    <div className={styles.group}>
                        <InputField
                            label="Date of birth:"
                            name="birthDate"
                            type="date"
                            value={formData.birthDate}
                            isEditing={isEditing}
                            onChange={handleInputChange}
                        />
                        <InputField
                            label="Phone:"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            error={errors.phone}
                            isEditing={isEditing}
                            onChange={handleInputChange}
                            placeholder="Enter your phone ..."
                        />
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
