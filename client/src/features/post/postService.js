import axios from 'axios';
import { base_url } from '../../Utils/axiosConfig';

const createPost = async (postData) => {
    const config = {
        headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${postData.token}`,
        },
    };
    const response = await axios.post(`${base_url}post`, postData.data, config);
    return response.data;
};

export const getAllPosts = async () => {
    const response = await axios.get(`${base_url}post`)
    if (response.data) {
        return response.data
    }
}

const deletePost = async (data) => {
    const config = {
        headers: {
            Authorization: `Bearer ${data.token}`,
            Accept: "application/json",
        },
    };
    const response = await axios.delete(`${base_url}post/${data.slug}`, config)
    if (response.data) {
        return response.data
    }
}

export const postService = {
    createPost, getAllPosts, deletePost
}