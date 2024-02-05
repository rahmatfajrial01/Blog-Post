import axios from 'axios';
import { base_url } from '../../Utils/axiosConfig';

const register = async (userData) => {
    const response = await axios.post(`${base_url}user/register`, userData)
    if (response.data) {
        return response.data
    }
}
const createUser = async (userData) => {
    const response = await axios.post(`${base_url}user/verif`, userData)
    if (response.data) {
        return response.data
    }
}
const resentOtp = async (userData) => {
    const response = await axios.post(`${base_url}user/resent-verif`, userData)
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
const google = async (userData) => {
    const response = await axios.post(`${base_url}user/google`, userData)
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

const updateUser = async (data) => {
    const config = {
        headers: {
            Authorization: `Bearer ${data.token}`,
            Accept: "application/json",
        },
    };
    const response = await axios.put(`${base_url}user/update-profile`, data.values, config)
    if (response.data) {
        return response.data
    }
}

const updateUserProfile = async (data) => {
    const config = {
        headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${data.token}`,
        },
    };
    const response = await axios.put(`${base_url}user/update-profile-picture`, data.values, config)
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
    updateUser,
    updateUserProfile,
    google,
    createUser,
    resentOtp
}