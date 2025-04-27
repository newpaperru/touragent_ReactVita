import styles from "./AddTourForm.module.css";
import { useAddTourForm } from "./useAddTourForm";
import { useState, useEffect } from "react";
import { InputField } from "./Inputs/InputField";
import { ArrayInput } from "./Inputs/ArrayInput";
import { DayPlanInput } from "./Inputs/DayPlanInput";

import { AutocompleteInput } from "./Inputs/AutocompleteInput";

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
        handleRemoveItem,
        validateForm,
        newDressCodeItem,
        setNewDressCodeItem,
        handleAddDressCodeItem,
        handleAddDayPlan,
        handleSubmit,
        nextStep,
        prevStep,
        DRESS_CODE_OPTIONS,
        INCLUDED_SERVICES,
        NOT_INCLUDED_SERVICES,
        ACTIVITY_ITEMS,
    } = useAddTourForm(onSubmit, onClose);

    const [showSuccess, setShowSuccess] = useState(false);

    useEffect(() => {
        if (showSuccess) {
            const timer = setTimeout(() => {
                onClose();
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [showSuccess, onClose]);

    const handleFinalNext = async (e) => {
        if (currentStep === 4) {
            try {
                if (!validateForm()) {
                    return;
                }
                await handleSubmit(e);
                setShowSuccess(true);
            } catch (error) {
                console.error("Submission failed:", error);
                alert("Failed to submit tour. Please try again.");
            }
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
                            {
                                name: "rating",
                                type: "number",
                                placeholder: "Enter rating (1.0-5.0)",
                            },
                            {
                                name: "countPeople",
                                placeholder: "Enter number of people",
                            },
                            {
                                name: "description",
                                type: "textarea",
                                placeholder: "Enter description",
                            },
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
                                name: "fullDescription",
                                type: "textarea",
                                placeholder: "Enter full description",
                            },
                            {
                                name: "review",
                                required: false,
                                placeholder: "Enter review (optional)",
                            },
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

                        {/* Dress Code с автодополнением */}
                        <div className={styles.group}>
                            <label>Dress Code:</label>
                            <AutocompleteInput
                                value={newDressCodeItem}
                                onChange={(e) =>
                                    setNewDressCodeItem(e.target.value)
                                }
                                onAdd={handleAddDressCodeItem}
                                placeholder="Add dress code item"
                                options={DRESS_CODE_OPTIONS}
                            />
                            <ul className={styles.list}>
                                {formData.dressCode?.map((item, index) => (
                                    <li
                                        key={`dresscode-${index}`}
                                        className={styles.list_item}
                                    >
                                        {item}
                                        <button
                                            type="button"
                                            onClick={() =>
                                                handleRemoveItem(
                                                    "dressCode",
                                                    index
                                                )
                                            }
                                            className={styles.remove_button}
                                            aria-label={`Remove ${item}`}
                                        >
                                            ×
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Included Services с автодополнением */}
                        <div className={styles.group}>
                            <label>Included Services:</label>
                            <AutocompleteInput
                                value={newIncludedItem}
                                onChange={(e) =>
                                    setNewIncludedItem(e.target.value)
                                }
                                onAdd={handleAddIncludedItem}
                                placeholder="Add included service"
                                options={INCLUDED_SERVICES}
                            />
                            <ul className={styles.list}>
                                {formData.included.map((item, index) => (
                                    <li
                                        key={`included-${index}`}
                                        className={styles.list_item}
                                    >
                                        {item}
                                        <button
                                            type="button"
                                            onClick={() =>
                                                handleRemoveItem(
                                                    "included",
                                                    index
                                                )
                                            }
                                            className={styles.remove_button}
                                            aria-label={`Remove ${item}`}
                                        >
                                            ×
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Not Included Services с автодополнением */}
                        <div className={styles.group}>
                            <label>Not Included Services:</label>
                            <AutocompleteInput
                                value={newNotIncludedItem}
                                onChange={(e) =>
                                    setNewNotIncludedItem(e.target.value)
                                }
                                onAdd={handleAddNotIncludedItem}
                                placeholder="Add not included service"
                                options={NOT_INCLUDED_SERVICES}
                            />
                            <ul className={styles.list}>
                                {formData.notIncluded.map((item, index) => (
                                    <li
                                        key={`notIncluded-${index}`}
                                        className={styles.list_item}
                                    >
                                        {item}
                                        <button
                                            type="button"
                                            onClick={() =>
                                                handleRemoveItem(
                                                    "notIncluded",
                                                    index
                                                )
                                            }
                                            className={styles.remove_button}
                                            aria-label={`Remove ${item}`}
                                        >
                                            ×
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
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
                            activityOptions={ACTIVITY_ITEMS}
                            onRemove={(index) => {
                                setNewDayPlan((prev) => ({
                                    ...prev,
                                    listItems: prev.listItems.filter(
                                        (_, i) => i !== index
                                    ),
                                }));
                            }}
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
                                <div
                                    key={`day-${index}`}
                                    className={styles.day_preview}
                                >
                                    <div className={styles.day_wrap}>
                                        <div className={styles.day_info}>
                                            <span className={styles.day_number}>
                                                {day.dayNumber}
                                            </span>
                                            <span className={styles.day_title}>
                                                {day.day}
                                            </span>
                                        </div>
                                        <p className={styles.day_description}>{day.descriptionTour}</p>
                                        <ul className={styles.list}>
                                            {day.listItems.map((item, i) => (
                                                <li
                                                    key={`day-${index}-item-${i}`}
                                                    className={styles.day_item}
                                                >
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            handleRemoveItem("tourPlan", index);
                                        }}
                                        className={styles.remove_button}
                                    >
                                        ×
                                    </button>
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
