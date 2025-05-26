import styles from "../Payment.module.css";

export const GuestInfoForm = ({ register, errors, defaultValues = {} }) => {
    return (
        <>
            <h2 className={styles.title}>
                Guest for whom the booking is being made
            </h2>
            <span className={styles.spec_info}>
                A booking confirmation will be sent to the specified email
                address
            </span>

            <div className={styles.form_wrap}>
                <div className={styles.form_group}>
                    <label htmlFor="fullName">Full Name</label>
                    <input
                        id="fullName"
                        defaultValue={defaultValues.fullName || ""}
                        {...register("fullName", {
                            required: "Full name is required",
                        })}
                        className={`${styles.input} ${
                            errors.fullName ? styles.error : ""
                        }`}
                    />
                    {errors.fullName && (
                        <span className={styles.error_message}>
                            {errors.fullName.message}
                        </span>
                    )}
                </div>

                <div className={styles.form_group}>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        defaultValue={defaultValues.email || ""}
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address",
                            },
                        })}
                        className={`${styles.input} ${
                            errors.email ? styles.error : ""
                        }`}
                    />
                    {errors.email && (
                        <span className={styles.error_message}>
                            {errors.email.message}
                        </span>
                    )}
                </div>

                <div className={styles.form_group}>
                    <label htmlFor="phone">Phone</label>
                    <input
                        id="phone"
                        defaultValue={defaultValues.phone || ""}
                        {...register("phone", {
                            required: "Phone is required",
                            pattern: {
                                value: /^\+?[0-9\s\-()]+$/,
                                message: "Invalid phone number",
                            },
                        })}
                        className={`${styles.input} ${
                            errors.phone ? styles.error : ""
                        }`}
                    />
                    {errors.phone && (
                        <span className={styles.error_message}>
                            {errors.phone.message}
                        </span>
                    )}
                </div>
            </div>
        </>
    );
};
