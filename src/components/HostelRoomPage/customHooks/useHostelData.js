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

                // Находим тур, содержащий нужный хостел
                const foundTour = tours.find(tour => 
                    tour.hostels?.some(h => h.id === hostelId)
                );

                if (!foundTour) throw new Error("Tour not found");

                const foundHostel = foundTour.hostels.find(h => h.id === hostelId);
                if (!foundHostel) throw new Error("Hostel not found");

                if (roomId) {
                    const foundRoom = foundHostel.hostelRooms.find(r => r.roomId === roomId);
                    if (!foundRoom) throw new Error("Room not found");

                    setData({
                        type: 'room',
                        tour: {
                            price: foundTour.price
                        },
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
                        data: foundHostel,
                        tour: {
                            price: foundTour.price
                        }
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