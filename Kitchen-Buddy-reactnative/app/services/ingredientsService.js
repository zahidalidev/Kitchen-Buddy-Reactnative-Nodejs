import axios from "axios";
import config from "../config/config.json";

const apiEndPoint = config.apiEndPoint + '/ingredients';

export const AddIngredient = async (body, userId) => {
    return await axios.post(`${apiEndPoint}/${userId}`, body);
}

export const getAllIngredients = async (userId) => {
    return await axios.get(`${apiEndPoint}/${userId}`);
}

export const getIngredientDetails = async (id) => {
    return await axios.get(`${apiEndPoint}/details/${id}`);
}

export const updateRipnessCheck = async (body) => {
    return await axios.put(`${apiEndPoint}/lastCheck`, body)
}

export const updateIngredient = async (body, id) => {
    return await axios.put(`${apiEndPoint}/${id}`, body)
}

export const removeIngredient = async (id) => {
    return await axios.delete(`${apiEndPoint}/${id}`)
}

