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

const addToFavorite = async (data) => {
    const config = {
        headers: {
            Authorization: `Bearer ${data.token}`,
            Accept: "application/json",
        },
    };
    const response = await axios.put(`${base_url}user/favorite`, data.values, config)
    if (response.data) {
        return response.data
    }
}

const getUserFavorite = async (data) => {
    const config = {
        headers: {
            Authorization: `Bearer ${data}`,
            Accept: "application/json",
        },
    };
    const response = await axios.get(`${base_url}user/favorite`, config)
    if (response.data) {
        return response.data
    }
}

export const authService = {
    getAllUser,
    addToFavorite,
    getUserFavorite
}