import styles from "./AddTourForm.module.css";
import { useAddTourForm } from "./useAddTourForm";
import { useState, useEffect } from "react";
import { InputField } from "./Inputs/InputField";
import { ArrayInput } from "./Inputs/ArrayInput";
import { DayPlanInput } from "./Inputs/DayPlanInput";

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
                            { name: "date", type: "date" },
                            { name: "urlImg", placeholder: "/name.*" },
                            { name: "country", placeholder: "Enter country" },
                            { name: "price", placeholder: "Enter price" },
                            { name: "rating", type: "number", placeholder: "Enter rating (1.0-5.0)" },
                            { name: "countPeople", placeholder: "Enter number of people" },
                            { name: "description", type: "textarea", placeholder: "Enter description" },
                        ].map((field) => (
                            <InputField
                                key={field.name}
                                name={field.name}
                                type={field.type}
                                required={field.required !== false}
                                placeholder={field.placeholder}
                                value={formData[field.name]}
                                onChange={handleChange}
                            />
                        ))}
                    </>
                );
            case 2:
                return (
                    <>
                        <span className={styles.title}>Tour Information</span>
                        {[
                            { name: "destination", placeholder: "Enter destination" },
                            { name: "departure", placeholder: "Enter departure location" },
                            { name: "departureTime", placeholder: "Enter departure time" },
                            { name: "returnTime", placeholder: "Enter return time" },
                            { name: "dressCode", placeholder: "Enter dress code" },
                            { name: "fullDescription", type: "textarea", placeholder: "Enter full description" },
                            { name: "review", required: false, placeholder: "Enter review (optional)" },
                        ].map((field) => (
                            <InputField
                                key={field.name}
                                name={field.name}
                                type={field.type}
                                required={field.required !== false}
                                placeholder={field.placeholder}
                                value={formData[field.name]}
                                onChange={handleChange}
                            />
                        ))}
                        <ArrayInput
                            label="Included Services"
                            value={newIncludedItem}
                            setValue={setNewIncludedItem}
                            onAdd={handleAddIncludedItem}
                            items={formData.included}
                            placeholder="Add included service"
                        />
                        <ArrayInput
                            label="Not Included Services"
                            value={newNotIncludedItem}
                            setValue={setNewNotIncludedItem}
                            onAdd={handleAddNotIncludedItem}
                            items={formData.notIncluded}
                            placeholder="Add not included service"
                        />
                    </>
                );
            case 3:
                return (
                    <>
                        <span className={styles.title}>Location Details</span>
                        <InputField
                            name="map"
                            value={formData.map}
                            onChange={handleChange}
                            placeholder="/name.*"
                        />
                        <ArrayInput
                            label="Location Descriptions"
                            value={newLocationDesc}
                            setValue={setNewLocationDesc}
                            onAdd={handleAddLocationDesc}
                            items={formData.locationDescription}
                            placeholder="Add location description paragraph"
                        />
                    </>
                );
            case 4:
                return (
                    <>
                        <span className={styles.title}>Tour Plan</span>
                        <DayPlanInput
                            dayPlan={newDayPlan}
                            setDayPlan={setNewDayPlan}
                            onAddListItem={handleAddListItem}
                            listItem={newListItem}
                            setListItem={setNewListItem}
                        />
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
                                <div key={`day-${index}`} className={styles.day_preview}>
                                    <strong>{day.dayNumber}: {day.day}</strong>
                                    <p>{day.descriptionTour}</p>
                                    <ul>
                                        {day.listItems.map((item, i) => (
                                            <li key={`day-${index}-item-${i}`}>{item}</li>
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