import axios from "axios";

export const PostService = {
    async getAll() {
        const response = await axios.get('https://64c27ebeeb7fd5d6ebcff76e.mockapi.io/posts');

        return response.data
    },

    async getPostId(id) {
        const response = await axios.get(`https://64c27ebeeb7fd5d6ebcff76e.mockapi.io/posts?id=${id}`);

        return response.data[0]
    },
}