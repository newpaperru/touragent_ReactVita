import styles from "./ProfileCard.module.css";
import avatarDefault from "/userDefaultAvatar.png";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useUserData } from "./useUserData";
import { useUserMutation } from "./useUserMutation";
import { AuthContext } from "../../services/AuthContext";

export const ProfileCard = () => {
    const { setIsAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    const {
        userData,
        setUserData,
        showRegistrationForm,
        setShowRegistrationForm,
        isLoading,
    } = useUserData(navigate);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    const mutation = useUserMutation(
        setUserData,
        setShowRegistrationForm,
        reset
    );

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem("isAuth");
        localStorage.removeItem("userId");
        navigate("/login");
    };

    const onSubmit = (data) => {
        mutation.mutate(data);
    };
    return (
        <div>
            {isLoading ? (
            <p>Загрузка...</p>
        ) : showRegistrationForm ? (
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
                                {userData.email}
                            </span>
                            <span className={styles.user_datas}>
                                {userData.phone}
                            </span>
                            <span className={styles.user_datas}>
                                {userData.birthDate}
                            </span>
                        </div>
                    </div>
                    <button className={styles.btnLogOut} onClick={logout}>
                        log out
                    </button>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                        <div className={styles.wrapper}>
                            <div className={styles.input_wrapper}>
                                <label className={styles.label}>
                                    Full Name:
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your full name ..."
                                    {...register("fullName", {
                                        required: true,
                                    })}
                                    className={styles.input}
                                />
                                {errors.fullName && (
                                    <p className={styles.error}>
                                        The date of birth is required
                                    </p>
                                )}
                            </div>

                            <div style={styles.inputContainerStyle}>
                                <label className={styles.label}>
                                    Date of birth:
                                </label>
                                <input
                                    type="date"
                                    {...register("birthDate", {
                                        required: true,
                                    })}
                                    className={styles.input}
                                />
                                {errors.birthDate && (
                                    <p className={styles.error}>
                                        The date of birth is required
                                    </p>
                                )}
                            </div>
                        </div>
                        <button type="submit" className={styles.buttonStyle}>
                            Save
                        </button>
                    </form>
            </div>
        ) : (
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
                                {userData.email}
                            </span>
                            <span className={styles.user_datas}>
                                {userData.phone}
                            </span>
                            <span className={styles.user_datas}>
                                {userData.birthDate}
                            </span>
                        </div>
                    </div>
                    <button className={styles.btnLogOut} onClick={logout}>
                        log out
                    </button>
                </div>
            </div>
        )}
        </div>
    );
};
