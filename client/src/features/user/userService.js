import axios from 'axios';
import { base_url } from '../../Utils/axiosConfig';

const register = async (userData) => {
    const response = await axios.post(`${base_url}user/register`, userData)
    if (response.data) {
        return response.data
    }
}
const login = async (userData) => {
    const response = await axios.post(`${base_url}user/login`, userData)
    if (response.data) {
        localStorage.setItem("token", JSON.stringify(response.data))
        return response.data
    }
}
const logout = () => {
    localStorage.clear()
}

export const authService = {
    register,
    login,
    logout
}