import styles from "./RegistrationForm.module.css";
import { Link } from "react-router-dom";
import { useRegistrationForm } from "./useRegistrationForm";

export const RegistrationForm = () => {
    const { register, handleSubmit, watch, onSubmit, mutation, errors } =
useRegistrationForm();
    const password = watch("password");

    return (
        <div className={styles.form__wrap} style={{position: 'relative'}}>
            <img style={{maxWidth: 60, position: "absolute", bottom: 111, left: 37}} src="/test2.gif" alt="" />
            <h1 className={styles.form__title}>Registration</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <div className={styles.form__input_wrap}>
                        <label htmlFor="email">
                            <input
                                className={styles.form__input}
                                id="email"
                                type="email"
                                placeholder="Email"
                                {...register("email", {
                                    required: "Enter email",
                                    pattern: {
                                        value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                                        message: "Wrong format email",
                                    },
                                })}
                            />
                            {errors.email && (
                                <p className={styles.form__error}>
                                    {errors.email.message}
                                </p>
                            )}
                        </label>
                    </div>
                    <div className={styles.form__input_wrap}>
                        <label htmlFor="phone">
                            <input
                                className={styles.form__input}
                                id="phone"
                                type="tel"
                                placeholder="Phone"
                                {...register("phone", {
                                    required: "Enter the phone number",
                                    pattern: {
                                        value: /^\+?\d{10,15}$/,
                                        message: "Wrong phone format",
                                    },
                                })}
                            />
                            {errors.phone && (
                                <p className={styles.form__error}>
                                    {errors.phone.message}
                                </p>
                            )}
                        </label>
                    </div>
                    <div className={styles.form__input_wrap}>
                        <label htmlFor="password">
                            <input
                                className={styles.form__input}
                                id="password"
                                type="password"
                                placeholder="Password"
                                {...register("password", {
                                    required: "Enter the password",
                                    minLength: {
                                        value: 6,
                                        message: "At least 6 characters",
                                    },
                                })}
                            />
                            {errors.password && (
                                <p className={styles.form__error}>
                                    {errors.password.message}
                                </p>
                            )}
                        </label>
                    </div>
                    <div className={styles.form__input_wrap}>
                        <label htmlFor="repeatPassword">
                            <input
                                className={styles.form__input}
                                id="repeatPassword"
                                type="password"
                                placeholder="Repeat password"
                                {...register("repeatPassword", {
                                    required: "Confirm the password",
                                    validate: (value) =>
                                        value === password ||
                                        "Passwords do not match",
                                })}
                            />
                            {errors.repeatPassword && (
                                <p className={styles.form__error}>
                                    {errors.repeatPassword.message}
                                </p>
                            )}
                        </label>
                    </div>
                </div>
                <button type="submit" className={styles.form__btn}>
                    {mutation.isLoading ? "Registration..." : "Register"}
                </button>
                {mutation.error && (
                    <p>Registration error: {mutation.error.message}</p>
                )}
            </form>
            <div className={styles.form__links_wrap}>
                <span className={styles.linkToAnotherForm}>
                    Have an account?
                    <Link
                        key={1}
                        to={"/login"}
                        className={styles.form__link}
                        style={{ marginLeft: 3 }}
                    >
                        Login
                    </Link>
                </span>
                <Link key={1} to={"/"} className={styles.form__link}>
                    Back To Home
                </Link>
            </div>
        </div>
    );
};
