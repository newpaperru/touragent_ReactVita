import styles from "../AddTourForm.module.css";

export const InputField = ({
    name,
    type = "text",
    required = true,
    placeholder = "",
    value,
    onChange
  }) => {
    const labelText = name.charAt(0).toUpperCase() + name.slice(1).replace(/([A-Z])/g, " $1");
    
    return (
      <div className={styles.group}>
        <label>{labelText}:</label>
        {type === "textarea" ? (
          <textarea
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            placeholder={placeholder}
          />
        ) : (
          <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            placeholder={placeholder}
          />
        )}
      </div>
    );
  };