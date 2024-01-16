import axios from 'axios';
import { base_url, config } from '../../Utils/axiosConfig';

const register = async (userData) => {
    const response = await axios.post(`${base_url}user/register`, userData)
    if (response.data) {
        return response.data
    }
}
const login = async (userData) => {
    const response = await axios.post(`${base_url}user/login`, userData)
    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data))
        return response.data
    }
}
const profile = async () => {
    const response = await axios.get(`${base_url}user/profile`, config)
    if (response.data) {
        return response.data
    }
}

const logout = () => {
    localStorage.clear()
}

export const authService = {
    register,
    login,
    profile,
    logout
}