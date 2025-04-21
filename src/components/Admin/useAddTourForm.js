import { useState } from "react";

const initialFormState = {
    // Шаг 1: Основная информация
    date: "",
    urlImg: "",
    country: "",
    price: "",
    rating: "",
    countPeople: "",
    description: "",

    // Шаг 2: Информация о туре
    destination: "",
    departure: "",
    departureTime: "",
    returnTime: "",
    dressCode: "",
    fullDescription: "",
    included: [],
    notIncluded: [],
    review: "",

    // Шаг 3: Локация
    map: "",
    locationDescription: [],

    // Шаг 4: План тура
    tourPlan: [],
};

export const useAddTourForm = (onSubmit, onClose) => {
    const [formData, setFormData] = useState(initialFormState);
    const [currentStep, setCurrentStep] = useState(1);
    const [newIncludedItem, setNewIncludedItem] = useState("");
    const [newNotIncludedItem, setNewNotIncludedItem] = useState("");
    const [newLocationDesc, setNewLocationDesc] = useState("");
    const [newDayPlan, setNewDayPlan] = useState({
        dayNumber: "",
        day: "",
        descriptionTour: "",
        listItems: [],
    });
    const [newListItem, setNewListItem] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleAddIncludedItem = () => {
        if (newIncludedItem) {
            setFormData((prev) => ({
                ...prev,
                included: [...prev.included, newIncludedItem],
            }));
            setNewIncludedItem("");
        }
    };

    const handleAddNotIncludedItem = () => {
        if (newNotIncludedItem) {
            setFormData((prev) => ({
                ...prev,
                notIncluded: [...prev.notIncluded, newNotIncludedItem],
            }));
            setNewNotIncludedItem("");
        }
    };

    const handleAddLocationDesc = () => {
        if (newLocationDesc) {
            setFormData((prev) => ({
                ...prev,
                locationDescription: [...prev.locationDescription, newLocationDesc],
            }));
            setNewLocationDesc("");
        }
    };

    const handleAddListItem = () => {
        if (newListItem) {
            setNewDayPlan((prev) => ({
                ...prev,
                listItems: [...prev.listItems, newListItem],
            }));
            setNewListItem("");
        }
    };

    const handleAddDayPlan = () => {
        if (newDayPlan.dayNumber && newDayPlan.day && newDayPlan.descriptionTour) {
            setFormData((prev) => ({
                ...prev,
                tourPlan: [...prev.tourPlan, newDayPlan],
            }));
            setNewDayPlan({
                dayNumber: "",
                day: "",
                descriptionTour: "",
                listItems: [],
            });
        }
    };

    const handleSubmit = async (e) => {
        if (e) e.preventDefault();
        try {
            await onSubmit(formData);
            setFormData(initialFormState);
            setCurrentStep(1);
            onClose();
        } catch (error) {
            console.error("Ошибка при отправке формы:", error);
        }
    };

    const nextStep = () => setCurrentStep((prev) => prev + 1);
    const prevStep = () => setCurrentStep((prev) => prev - 1);

    return {
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
    };
};