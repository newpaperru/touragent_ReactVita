import styles from "../AddTourForm.module.css";

export const ArrayInput = ({
    label,
    value,
    setValue,
    onAdd,
    items,
    placeholder,
    required = true,
  }) => {
    return (
      <div className={styles.group}>
        <label>{label}:</label>
        <div className={styles.array_input}>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={placeholder}
            required={required}
          />
          <button type="button" onClick={onAdd} className={styles.add_button}>
            Add
          </button>
        </div>
        <ul className={styles.list}>
          {items.map((item, index) => (
            <li key={`${label.toLowerCase()}-${index}`}>{item}</li>
          ))}
        </ul>
      </div>
    );
  };