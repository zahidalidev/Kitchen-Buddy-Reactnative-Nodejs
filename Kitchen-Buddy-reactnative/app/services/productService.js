import axios from "axios";
import config from "../config/config.json";

const apiEndPoint = config.productApiEndPoint;

export const getProductDetails = async (id) => {
    return await axios.get(`${apiEndPoint}/${id}`);
}
