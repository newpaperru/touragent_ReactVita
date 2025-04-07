import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';

export const useExploreData = () => {
    const location = useLocation();
    const { id } = useParams();
    const [packageData, setPackageData] = useState(location.state?.packageData);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!packageData && id) {
            const fetchData = async () => {
                try {
                    const response = await fetch('/db.json');
                    const data = await response.json();
                    const foundPackage = data.archive.find(pkg => pkg.id === id);
                    if (!foundPackage) {
                        throw new Error('Package not found');
                    }
                    setPackageData(foundPackage);
                } catch (err) {
                    setError(err.message);
                }
            };
            fetchData();
        }
    }, [id, packageData]);

    return { packageData, error };
};