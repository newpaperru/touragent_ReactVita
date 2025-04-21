import styles from "./AddTourForm.module.css";
import { useAddTourForm } from "./useAddTourForm";
import { useState, useEffect } from "react";

export const AddTourForm = ({ onSubmit, onClose }) => {
    const {
        formData,
        currentStep,
        newIncludedItem,
        newNotIncludedItem,
        newLocationDesc,
        newDayPlan,
        newListItem,
        setNewIncludedItem,
        setNewNotIncludedItem,
        setNewLocationDesc,
        setNewDayPlan,
        setNewListItem,
        handleChange,
        handleAddIncludedItem,
        handleAddNotIncludedItem,
        handleAddLocationDesc,
        handleAddListItem,
        handleAddDayPlan,
        handleSubmit,
        nextStep,
        prevStep,
    } = useAddTourForm(onSubmit, onClose);

    const [showSuccess, setShowSuccess] = useState(false);

    useEffect(() => {
        if (showSuccess) {
            const timer = setTimeout(onClose, 3000);
            return () => clearTimeout(timer);
        }
    }, [showSuccess, onClose]);

    const handleFinalNext = async (e) => {
        if (currentStep === 4) {
            await handleSubmit(e);
            setShowSuccess(true);
        } else {
            nextStep();
        }
    };

    const renderInputField = (
        name,
        type = "text",
        required = true,
        placeholder = ""
    ) => (
        <div key={name} className={styles.group}>
            <label>
                {name.charAt(0).toUpperCase() +
                    name.slice(1).replace(/([A-Z])/g, " $1")}
                :
            </label>
            {type === "textarea" ? (
                <textarea
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    required={required}
                    placeholder={placeholder}
                />
            ) : (
                <input
                    type={type}
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    required={required}
                    placeholder={placeholder}
                />
            )}
        </div>
    );

    const renderArrayInput = (
        label,
        value,
        setValue,
        onAdd,
        items,
        placeholder
    ) => (
        <div className={styles.group}>
            <label>{label}:</label>
            <div className={styles.array_input}>
                <input
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder={placeholder}
                />
                <button
                    type="button"
                    onClick={onAdd}
                    className={styles.add_button}
                >
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

    const renderDayPlanInput = () => (
        <>
            <div className={styles.group}>
                <label>Day Number:</label>
                <input
                    type="text"
                    value={newDayPlan.dayNumber}
                    onChange={(e) =>
                        setNewDayPlan({
                            ...newDayPlan,
                            dayNumber: e.target.value,
                        })
                    }
                    placeholder="01"
                />
            </div>
            <div className={styles.group}>
                <label>Day Title:</label>
                <input
                    type="text"
                    value={newDayPlan.day}
                    onChange={(e) =>
                        setNewDayPlan({ ...newDayPlan, day: e.target.value })
                    }
                    placeholder="Arrival and City Tour"
                />
            </div>
            <div className={styles.group}>
                <label>Day Description:</label>
                <textarea
                    value={newDayPlan.descriptionTour}
                    onChange={(e) =>
                        setNewDayPlan({
                            ...newDayPlan,
                            descriptionTour: e.target.value,
                        })
                    }
                    placeholder="Detailed description of the day's activities"
                />
            </div>
        </>
    );

    const renderStep = () => {
        if (showSuccess) {
            return (
                <div className={styles.success_message}>
                    The tour is successfully added ✅
                </div>
            );
        }

        switch (currentStep) {
            case 1:
                return (
                    <>
                        <span className={styles.title}>Basic Information</span>
                        {[
                            {
                                name: "date",
                                type: "date",
                                placeholder: "",
                            },
                            { name: "urlImg", placeholder: "/name.*" },
                            { name: "country", placeholder: "Enter country" },
                            { name: "price", placeholder: "Enter price" },
                            {
                                name: "rating",
                                type: "number",
                                placeholder: "Enter rating (1.0-5.0)",
                            },
                            {
                                name: "countPeople",
                                placeholder: "Enter number of people",
                            },
                        ].map((field) =>
                            renderInputField(
                                field.name,
                                field.type,
                                true,
                                field.placeholder
                            )
                        )}
                        {renderInputField(
                            "description",
                            "textarea",
                            true,
                            "Enter description"
                        )}
                    </>
                );
            case 2:
                return (
                    <>
                        <span className={styles.title}>Tour Information</span>
                        {[
                            {
                                name: "destination",
                                placeholder: "Enter destination",
                            },
                            {
                                name: "departure",
                                placeholder: "Enter departure location",
                            },
                            {
                                name: "departureTime",
                                placeholder: "Enter departure time",
                            },
                            {
                                name: "returnTime",
                                placeholder: "Enter return time",
                            },
                            {
                                name: "dressCode",
                                placeholder: "Enter dress code",
                            },
                            {
                                name: "fullDescription",
                                type: "textarea",
                                placeholder: "Enter full description",
                            },
                            {
                                name: "review",
                                required: false,
                                placeholder: "Enter review (optional)",
                            },
                        ].map((field) =>
                            renderInputField(
                                field.name,
                                field.type,
                                field.required,
                                field.placeholder
                            )
                        )}
                        {renderArrayInput(
                            "Included Services",
                            newIncludedItem,
                            setNewIncludedItem,
                            handleAddIncludedItem,
                            formData.included,
                            "Add included service"
                        )}
                        {renderArrayInput(
                            "Not Included Services",
                            newNotIncludedItem,
                            setNewNotIncludedItem,
                            handleAddNotIncludedItem,
                            formData.notIncluded,
                            "Add not included service"
                        )}
                    </>
                );
            case 3:
                return (
                    <>
                        <span className={styles.title}>Location Details</span>
                        {renderInputField(
                            "map",
                            "text",
                            true,
                            "/name.*"
                        )}
                        {renderArrayInput(
                            "Location Descriptions",
                            newLocationDesc,
                            setNewLocationDesc,
                            handleAddLocationDesc,
                            formData.locationDescription,
                            "Add location description paragraph"
                        )}
                    </>
                );
            case 4:
                return (
                    <>
                        <span className={styles.title}>Tour Plan</span>
                        {renderDayPlanInput()}
                        {renderArrayInput(
                            "Activity Items",
                            newListItem,
                            setNewListItem,
                            handleAddListItem,
                            newDayPlan.listItems,
                            "Add activity item"
                        )}
                        <button
                            type="button"
                            onClick={handleAddDayPlan}
                            className={styles.add_section_button}
                        >
                            Add Day Plan
                        </button>
                        <div className={styles.added_sections}>
                            <h4>Added Days:</h4>
                            {formData.tourPlan.map((day, index) => (
                                <div
                                    key={`day-${index}`}
                                    className={styles.day_preview}
                                >
                                    <strong>
                                        {day.dayNumber}: {day.day}
                                    </strong>
                                    <p>{day.descriptionTour}</p>
                                    <ul>
                                        {day.listItems.map((item, i) => (
                                            <li key={`day-${index}-item-${i}`}>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <div className={styles.overlay}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <button
                    type="button"
                    onClick={onClose}
                    className={styles.close_button}
                >
                    ×
                </button>
                {renderStep()}
                <div className={styles.navigation}>
                    {currentStep > 1 && !showSuccess && (
                        <button
                            type="button"
                            onClick={prevStep}
                            className={styles.nav_button}
                        >
                            Previous
                        </button>
                    )}
                    {currentStep < 4 && !showSuccess ? (
                        <button
                            type="button"
                            onClick={nextStep}
                            className={styles.nav_button}
                        >
                            Next
                        </button>
                    ) : !showSuccess ? (
                        <button
                            type="button"
                            onClick={handleFinalNext}
                            className={styles.submit_button}
                        >
                            Add Tour
                        </button>
                    ) : null}
                </div>
            </form>
        </div>
    );
};
