import axios from 'axios';
import { base_url } from '../../Utils/axiosConfig';

export const getAllComments = async () => {
    const response = await axios.get(`${base_url}comment`)
    if (response.data) {
        return response.data
    }
}

export const createComment = async (data) => {
    const config = {
        headers: {
            Authorization: `Bearer ${data.token}`,
            Accept: "application/json",
        },
    };
    const response = await axios.post(`${base_url}comment`, data.values, config)
    if (response.data) {
        return response.data
    }
}

export const updateCheckComment = async (data) => {
    const config = {
        headers: {
            Authorization: `Bearer ${data.token}`,
            Accept: "application/json",
        },
    };
    const response = await axios.put(`${base_url}comment/${data.id}`, data.values, config)
    if (response.data) {
        return response.data
    }
}

export const commentService = {
    getAllComments,
    createComment,
    updateCheckComment
}