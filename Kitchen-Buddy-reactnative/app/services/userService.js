import axios from "axios";
import config from "../config/config.json";

const apiEndPoint = config.apiEndPoint + '/users';

export const registerUser = async (body) => {
    return await axios.post(apiEndPoint, body);
}