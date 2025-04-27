import { useState, useRef, useEffect } from 'react';
import styles from './AutocompleteInput.module.css';

export const AutocompleteInput = ({
    value,
    onChange,
    onAdd,
    placeholder,
    options,
    showAddButton = true
}) => {
    const [filteredOptions, setFilteredOptions] = useState(options);
    const [showOptions, setShowOptions] = useState(false);
    const wrapperRef = useRef(null);
    const inputRef = useRef(null);

    // Обработчик клика вне компонента
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setShowOptions(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Обработчик потери фокуса
    const handleBlur = () => {
        setTimeout(() => {
            setShowOptions(false);
        }, 200);
    };

    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        onChange(e);
        setFilteredOptions(
            options.filter(option =>
                option.toLowerCase().includes(inputValue.toLowerCase())
        ));
    };

    const handleSelect = (option) => {
        onChange({ target: { value: option } });
        setShowOptions(false);
        inputRef.current?.focus();
    };

    const handleAddClick = () => {
        onAdd();
        setShowOptions(false);
        setFilteredOptions(options);
    };

    return (
        <div className={styles.autocomplete_wrapper} ref={wrapperRef}>
            <div className={styles.input_container}>
                <input
                    ref={inputRef}
                    type="text"
                    value={value}
                    onChange={handleInputChange}
                    placeholder={placeholder}
                    onFocus={() => setShowOptions(true)}
                    onBlur={handleBlur}
                />
                {showAddButton && onAdd && (
                    <button 
                        type="button" 
                        onClick={handleAddClick}
                        className={styles.add_button}
                        disabled={!value.trim()}
                    >
                        Add
                    </button>
                )}
            </div>
            
            {showOptions && filteredOptions.length > 0 && (
                <ul className={styles.options_list}>
                    {filteredOptions.map((option, index) => (
                        <li 
                            key={index}
                            onClick={() => handleSelect(option)}
                            className={styles.option_item}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};