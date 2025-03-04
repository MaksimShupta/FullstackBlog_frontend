import { API_BASE_URL } from "./config";

const postsPath = `${API_BASE_URL}/posts`;

export const getPosts = async () => {
    try {
        const response = await fetch(postsPath);
        const data = await response.json();
        console.log("Posts:", data);
        return data;
    } catch (error) {
        console.error("Error fetching posts:", error);
        throw error;
    }
};

export const getPost = async (id) => {
    try {
        const response = await fetch(`${postsPath}/${id}`);
        console.log("response here", response);
        if (!response.ok) {
            throw new Error(
                `Error fetching post with id ${id}: ${response.statusText}`
            );
        }
        const data = await response.json();
        console.log("Fetched Post:", data);
        return data;
    } catch (error) {
        console.error("Error fetching post:", error);
    }
};

export const createPost = async (postData) => {
    try {
        const response = await fetch(`${postsPath}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(postData),
        });
        if (!response.ok) {
            throw new Error(`Error creating post: ${response.statusText}`);
        }
        const data = await response.json();
        console.log("Created Post:", data);
        return data;
    } catch (error) {
        console.error("Error creating post:", error);
    }
};

export const updatePost = async (id, postData) => {
    try {
        const response = await fetch(`${postsPath}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(postData),
        });
        if (!response.ok) {
            throw new Error(
                `Error updating post with id ${id}: ${response.statusText}`
            );
        }
        const data = await response.json();
        console.log("Updated Post:", data);
        return data;
    } catch (error) {
        console.error("Error updating post:", error);
    }
};

export const deletePost = async (id) => {
    try {
        const response = await fetch(`${postsPath}/${id}`, {
            method: "DELETE",
        });
        if (!response.ok) {
            throw new Error(
                `Error deleting post with id ${id}: ${response.statusText}`
            );
        }
        const data = await response.json();
        console.log("Deleted Post:", data);
        return data;
    } catch (error) {
        console.error("Error deleting post:", error);
    }
};
