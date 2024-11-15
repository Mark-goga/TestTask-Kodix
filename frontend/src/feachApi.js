import axios from "axios";

export async function fetchAllBlog() {
  try {
    const response = await axios.get('/posts');
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
}
export async function fetchBlogBiId(id) {
  try {
    const response = await axios.get(`/posts/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
}

