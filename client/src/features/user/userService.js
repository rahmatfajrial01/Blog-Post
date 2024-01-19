import axios from 'axios';
import { base_url } from '../../Utils/axiosConfig';


const getAllUser = async () => {
    // const config = {
    //     headers: {
    //         Authorization: `Bearer ${token}`,
    //         Accept: "application/json",
    //     },
    // };
    const response = await axios.get(`${base_url}user/`)
    if (response.data) {
        return response.data
    }
}

const register = async (userData) => {
    const response = await axios.post(`${base_url}user/register`, userData)
    if (response.data) {
        return response.data
    }
}
const login = async (userData) => {
    const response = await axios.post(`${base_url}user/login`, userData)
    if (response.data) {
        // localStorage.setItem("user", JSON.stringify(response.data))
        return response.data
    }
}
const profile = async (token) => {
    if (token === undefined) return
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
        },
    };
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
    logout,
    getAllUser
}