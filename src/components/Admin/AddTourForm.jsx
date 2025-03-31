import { useState } from "react";
import styles from "./AddTourForm.module.css";

const initialFormState = {
    date: "",
    urlImg: "",
    country: "",
    price: "",
    rating: "",
    countPeople: "",
    description: "",
};

export const AddTourForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState(initialFormState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData(initialFormState);
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <span className={styles.title}>Add New Tour</span>

            {Object.entries(formData).map(([name, value]) => (
                <div key={name} className={styles.group}>
                    <label>
                        {name.charAt(0).toUpperCase() +
                            name.slice(1).replace(/([A-Z])/g, " $1")}
                        :
                    </label>
                    {name === "description" ? (
                        <textarea
                            name={name}
                            value={value}
                            onChange={handleChange}
                            required
                        />
                    ) : (
                        <input
                            type={
                                name === "date"
                                    ? "date"
                                    : name === "rating"
                                    ? "number"
                                    : "text"
                            }
                            name={name}
                            value={value}
                            onChange={handleChange}
                            placeholder={
                                name === "urlImg" ? "/path/to/image.png" : ""
                            }
                            min={name === "rating" ? "0" : undefined}
                            max={name === "rating" ? "5" : undefined}
                            step={name === "rating" ? "0.1" : undefined}
                            required
                        />
                    )}
                </div>
            ))}

            <button type="submit" className={styles.button}>
                Add Tour
            </button>
        </form>
    );
};
