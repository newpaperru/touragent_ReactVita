import styles from "./LoginForm.module.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useLoginForm } from "./useLoginForm";

export const LoginForm = () => {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm();

    const { mutate, isLoading } = useLoginForm({
        onErrorCustom: (error) => {
            setError("password", {
                type: "manual",
                message: error.message,
            });
        },
    });

    const onSubmit = (data) => {
        mutate(data);
    };

    return (
        <div className={styles.wrap}>
            <h1 className={styles.title}>Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <div className={styles.input_wrap}>
                        <label htmlFor="email">
                            <input
                                className={styles.input}
                                type="email"
                                placeholder="Email"
                                {...register("email", {
                                    required: "Enter email",
                                })}
                            />
                            {errors.email && (
                                <p className={styles.error}>
                                    {errors.email.message}
                                </p>
                            )}
                        </label>
                    </div>
                    <div className={styles.input_wrap}>
                        <label htmlFor="password">
                            <input
                                className={styles.input}
                                type="password"
                                placeholder="Password"
                                {...register("password", {
                                    required: "Enter the password",
                                })}
                            />
                            {errors.password && (
                                <p className={styles.error}>
                                    {errors.password.message}
                                </p>
                            )}
                        </label>
                    </div>
                </div>
                <button type="submit" className={styles.btn}>
                    {isLoading ? "Loging..." : "Login"}
                </button>
            </form>
            <div className={styles.links_wrap}>
                <span className={styles.linkToAnotherForm}>
                    Dont have an account?
                    <Link
                        key={1}
                        to={"/registration"}
                        className={styles.link}
                        style={{ marginLeft: 3 }}
                    >
                        Registration
                    </Link>
                </span>
                <Link key={1} to={"/"} className={styles.link}>
                    Back To Home
                </Link>
            </div>
        </div>
    );
};
