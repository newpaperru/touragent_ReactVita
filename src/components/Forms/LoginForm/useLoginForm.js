import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../services/AuthContext';
import { useContext } from 'react';

export function useLoginForm({ onErrorCustom } = {}) {

    const navigate = useNavigate()
    const { setIsAuth } = useContext(AuthContext);

    // Функция для запроса авторизации пользователя
    const loginUser = async ({ email, password }) => {
        const response = await fetch(
            `http://localhost:3000/users?email=${encodeURIComponent(
                email
            )}&password=${encodeURIComponent(password)}`
        )
        if (!response.ok) {
            throw new Error('Server error')
        }
        const data = await response.json()
        if (data.length === 0) {
            throw new Error('Wrong email or password')
        }
        return data[0]
    }

    return useMutation(loginUser, {
        onSuccess: () => {
            setIsAuth(true);
            navigate('/');
        },
        onError: (error) => {
            if (onErrorCustom) {
                onErrorCustom(error)
            }
        }
    })
}