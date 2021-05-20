import axios from "axios";
import config from "../config/config.json";

const apiEndPoint = config.apiEndPoint;

export const getCategories = async () => {
    return await axios.get(`${apiEndPoint}/category`);
}

export const getLocations = async () => {
    return await axios.get(`${apiEndPoint}/location`);
}

export const getConfectionTypes = async () => {
    return await axios.get(`${apiEndPoint}/confectionType`);
}
