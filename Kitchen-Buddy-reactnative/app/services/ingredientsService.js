import axios from "axios";
import config from "../config/config.json";

const apiEndPoint = config.apiEndPoint + '/ingredients';

export const AddIngredient = async (body, userId) => {
    return await axios.post(`${apiEndPoint}/${userId}`, body);
}

export const getAllIngredients = async (userID) => {
    return await axios.get(`${apiEndPoint}/${userID}`);
}