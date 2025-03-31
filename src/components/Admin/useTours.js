import { useState, useEffect } from "react";

export function useTours() {
    const [tours, setTours] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchTours = async () => {
        setLoading(true);
        try {
            const response = await fetch("http://localhost:3000/archive");
            if (!response.ok) throw new Error("Failed to fetch tours");
            const data = await response.json();
            setTours(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const addTour = async (newTour) => {
        try {
            const response = await fetch("http://localhost:3000/archive", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newTour),
            });
            if (!response.ok) throw new Error("Failed to add tour");
            const createdTour = await response.json();
            setTours(prev => [...prev, createdTour]);
            return createdTour;
        } catch (err) {
            setError(err.message);
            throw err;
        }
    };

    useEffect(() => {
        fetchTours();
    }, []);

    return { tours, loading, error, addTour, fetchTours };
}