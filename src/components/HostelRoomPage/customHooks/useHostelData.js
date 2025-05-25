import { useState, useEffect } from 'react';

export const useHostelRoomData = (hostelId, roomId = null) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(`http://localhost:3000/archive`);
                const tours = await response.json();

                const foundHostel = tours.flatMap(tour =>
                    tour.hostels?.filter(h => h.id === hostelId) || []
                ).find(Boolean);

                if (!foundHostel) throw new Error("Hostel not found");

                if (roomId) {
                    const foundRoom = foundHostel.hostelRooms.find(r => r.roomId === roomId);
                    if (!foundRoom) throw new Error("Room not found");

                    setData({
                        type: 'room',
                        hostel: {
                            title: foundHostel.hostelTitle,
                            scoreInText: foundHostel.scoreInText,
                            scoreReviews: foundHostel.scoreReviews,
                            address: foundHostel.hostelAddress
                        },
                        room: {
                            title: foundRoom.roomTitle,
                            breakfast: foundRoom.breakfast,
                            returnPrepayment: foundRoom.returnPrepayment,
                            cost: foundRoom.roomCost
                        }
                    });
                } else {
                    setData({
                        type: 'hostel',
                        data: foundHostel
                    });
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [hostelId, roomId]);

    return { data, error, loading };
};