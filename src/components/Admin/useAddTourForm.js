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
    dressCode: [],
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

const DRESS_CODE_OPTIONS = [
    "Casual",
    "Business casual",
    "Formal",
    "Sportswear",
    "Swimwear",
    "Hiking gear",
    "Evening wear"
];

const INCLUDED_SERVICES = [
    "Free Wi-Fi",
    "Breakfast",
    "Airport transfer",
    "Guided tour",
    "Entrance fees",
    "Hotel accommodation",
    "Lunch",
    "Dinner",
    "Travel insurance"
];

const NOT_INCLUDED_SERVICES = [
    "Visa fees",
    "Personal expenses",
    "Alcoholic beverages",
    "Optional tours",
    "Tips",
    "Laundry service",
    "Spa treatments"
];

const ACTIVITY_ITEMS = [
    "City tour",
    "Museum visit",
    "Shopping time",
    "Hiking",
    "Boat trip",
    "Photo session",
    "Free time",
    "Dinner at local restaurant"
];

export const useAddTourForm = (onSubmit) => {
    const [formData, setFormData] = useState(initialFormState);
    const [currentStep, setCurrentStep] = useState(1);
    const [newDressCodeItem, setNewDressCodeItem] = useState("");
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

    const handleRemoveItem = (type, index) => {
        const fieldMap = {
            dressCode: 'dressCode',
            included: 'included',
            notIncluded: 'notIncluded',
            tourPlan: 'tourPlan'
        };

        if (type === 'tourPlan') {
            setFormData(prev => ({
                ...prev,
                tourPlan: prev.tourPlan.filter((_, i) => i !== index)
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [fieldMap[type]]: prev[fieldMap[type]].filter((_, i) => i !== index)
            }));
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

    const handleAddDressCodeItem = () => {
        if (newDressCodeItem) {
            setFormData(prev => ({
                ...prev,
                dressCode: [...(prev.dressCode || []), newDressCodeItem]
            }));
            setNewDressCodeItem("");
        }
    };

    const handleAddDayPlan = () => {
        if (!newDayPlan.dayNumber || !newDayPlan.day || !newDayPlan.descriptionTour) {
            alert("Please fill all day plan fields (Day Number, Day Title and Description)");
            return;
        }

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
    };

    const validateForm = () => {
        // Проверка шага 1 (Basic Information)
        if (
            !formData.date ||
            !formData.urlImg ||
            !formData.country ||
            !formData.price ||
            !formData.rating ||
            !formData.countPeople ||
            !formData.description
        ) {
            alert("Please fill all required fields in Basic Information");
            return false;
        }

        // Проверка шага 2 (Tour Information)
        if (
            !formData.destination ||
            !formData.departure ||
            !formData.departureTime ||
            !formData.returnTime ||
            !formData.fullDescription ||
            formData.included.length === 0 ||
            formData.notIncluded.length === 0
        ) {
            alert("Please fill all required fields in Tour Information");
            return false;
        }

        // Проверка шага 3 (Location Details)
        if (!formData.map || formData.locationDescription.length === 0) {
            alert("Please fill all required fields in Location Details");
            return false;
        }

        // Проверка шага 4 (Tour Plan)
        if (formData.tourPlan.length === 0) {
            alert("Please add at least one day plan");
            return false;
        }

        return true;
    };


    const handleSubmit = async (e) => {
        if (e) e.preventDefault();

        try {
            await onSubmit(formData);
            setFormData(initialFormState);
            setCurrentStep(1);
        } catch (error) {
            console.error("Form submission error:", error);
            throw error;
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
        newDressCodeItem,
        validateForm,
        handleRemoveItem,
        setNewDressCodeItem,
        handleAddDressCodeItem,
        handleAddNotIncludedItem,
        handleAddLocationDesc,
        handleAddListItem,
        handleAddDayPlan,
        handleSubmit,
        nextStep,
        prevStep,
        DRESS_CODE_OPTIONS,
        INCLUDED_SERVICES,
        NOT_INCLUDED_SERVICES,
        ACTIVITY_ITEMS
    };
};