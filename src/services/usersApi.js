import { API_BASE_URL } from "./config";

const usersPath = `${API_BASE_URL}/users`;

export const getUser = async (email, password) => {
    try {
        console.log("Sending credentials to the API:", { email, password });
        const response = await fetch(usersPath, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });
        console.log("user response here", response);
        //if (!response.ok) {
        //    throw new Error(`Response error by fetching user: ${response.statusText}`);
        //}
        if (response.status !== 200) {
            const errorText = await response.text();
            console.error("Error response:", errorText);
            return;
        }
        const data = await response.json();
        console.log("Fetched Post:", data);
        return data;
    } catch (error) {
        console.error("Error fetching user:", error);
    }
};

export const createUser = async (email, password, fullname) => {
    try {
        console.log("path:", usersPath);
        console.log("Sending data to the API:", { email, password, fullname });
        const response = await fetch(usersPath, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password, fullname }),
        });
        console.log("user response here", response);

        if (!response.ok) {
            const errorText = await response.text();
            console.error("Error response:", errorText);

            if (response.status === 400) {
                console.error("Bad request:", errorText);
            } else if (response.status === 401) {
                console.error("Unauthorized:", errorText);
            } else if (response.status >= 500) {
                console.error("Server error:", errorText);
            }
            return;
        }
        const data = await response.json();
        console.log("Fetched Post:", data);
        return data;
    } catch (error) {
        console.error("Error fetching user:", error);
    }
};
