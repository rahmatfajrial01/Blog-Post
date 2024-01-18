import axios from 'axios';
import { useSelector } from 'react-redux';
import { base_url } from '../../Utils/axiosConfig';

export const getAllPostCategory = async () => {
    const response = await axios.get(`${base_url}post-categories`)
    if (response.data) {
        return response.data
    }
}

export const createPostCategory = async (data) => {
    const config = {
        headers: {
            Authorization: `Bearer ${data.token}`,
            Accept: "application/json",
        },
    };
    const response = await axios.post(`${base_url}post-categories`, data.values, config)
    if (response.data) {
        return response.data
    }
}

export const postCategoriesService = {
    getAllPostCategory,
    createPostCategory
}