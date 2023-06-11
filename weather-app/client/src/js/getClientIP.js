import axios from "axios";
import {IP_API_2} from "../env/env";

// Getting the IP of the client by using the following API: https://ipapi.co/

export const getClientIP = async () => {
    try {
        const response = await axios.get(IP_API_2);
        const data = response.data;
        const ipAddress = data.ip;
        console.log("Client IP: ", ipAddress);
        return ipAddress;
    } catch (error)
    {
        console.error("Error retrieving client IP:", error);
        return null;
    }
};