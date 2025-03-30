export const validators = {
    email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
    phone: (value) => /^\+?\d{11,15}$/.test(value),
    fullName: (value) => /^[a-zA-Zа-яА-Я\s"-]{3,}$/.test(value.trim()),
};

export const errorMessages = {
    fullName: "Name must contain at least 3 characters (letters, spaces, apostrophes or hyphens)",
    email: "Invalid email format",
    phone: "Invalid phone format",
};

export const useValidation = () => {
    const validateField = (name, value, setErrors) => {
        if (!validators[name](value)) {
            setErrors(prev => ({ ...prev, [name]: errorMessages[name] }));
            return false;
        }
        setErrors(prev => ({ ...prev, [name]: "" }));
        return true;
    };

    return { validateField, errorMessages };
};