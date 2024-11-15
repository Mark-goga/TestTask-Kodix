import axios from "axios";

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export async function getPosts({page = 1, limit = 10}) {
	const response = await axios.get(`${BASE_URL}/posts`, {
		params: {
			_page: page,
			_limit: limit
		}
	});
	console.log(response.data);
	return response.data;
}


export async function getUserById(userId) {
	const response = await axios.get(`${BASE_URL}/users/${userId}`);
	return response.data;
}

export async function getPostById(postId) {
	const response = await axios.get(`${BASE_URL}/posts/${postId}`);
	return response.data;
}

export async function getCommentsByPostId(postId) {
	const response = await axios.get(`${BASE_URL}/posts/${postId}/comments`);
	return response.data;
}