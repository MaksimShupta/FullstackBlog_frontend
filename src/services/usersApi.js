import { API_BASE_URL } from "./config";

const usersPath = `${API_BASE_URL}/users`;

export const getUser = async (email, password) => {
    try {
        const response = await fetch(usersPath, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });
        console.log("user response here", response);
        if (!response.ok) {
            throw new Error(`Response error by fetching user: ${response.statusText}`);
        }
        const data = await response.json();
        console.log("Fetched Post:", data);
        return data;
    } catch (error) {
        console.error("Error fetching user:", error);
    }
};
