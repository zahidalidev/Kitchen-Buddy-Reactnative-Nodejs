import axios from "axios";
import config from "../config/config.json";

const apiEndPoint = config.apiEndPoint + '/users';

export const registerUser = async (body) => {
    return await axios.post(apiEndPoint, body);
}

export const loginUser = async (email, password) => {
    return await axios.get(`${apiEndPoint}/${email}/${password}`);
}
