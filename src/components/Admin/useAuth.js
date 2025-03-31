import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../services/AuthContext';

export function useAuth() {
    const { setIsAuth, setUserRole } = useContext(AuthContext);
    const navigate = useNavigate();

    const logout = () => {
        setIsAuth(false);
        setUserRole(null);
        localStorage.removeItem("isAuth");
        localStorage.removeItem("userId");
        localStorage.removeItem("userRole");
        navigate("/login");
    };

    return { logout };
}