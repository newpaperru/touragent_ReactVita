import { useState, useEffect } from 'react';

export const useHostelData = (hostelId) => {
    const [hostel, setHostel] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchHostel = async () => {
            try {
                const response = await fetch(`http://localhost:3000/archive`);
                const tours = await response.json();

                const foundHostel = tours.flatMap(tour =>
                    tour.hostels?.filter(h => h.id === hostelId) || []
                ).find(Boolean);

                if (!foundHostel) throw new Error("Hostel not found");
                setHostel(foundHostel);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchHostel();
    }, [hostelId]);

    return { hostel, error };
};