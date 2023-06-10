import axios from "axios";

// Getting the IP of the client by using the following API: https://ipapi.co/

export const getClientIP = async () => {
    try {
        const response = await axios.get("https://ipapi.co/json");
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