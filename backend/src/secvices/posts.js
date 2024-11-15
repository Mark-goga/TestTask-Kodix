import axios from "axios";

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export async function getPosts({page = 1, limit = 6}) {
	const response = await axios.get(`${BASE_URL}/posts`, {
		params: {
			_page: page,
			_limit: limit
		}
	});
	const data = response.data;
	const postsWithDetails = addDateAndPhoto(data);
	const firstPost = postsWithDetails[0];
	const otherPosts = postsWithDetails.slice(1);
	const firstUserid = data[0].userId;
	const user = await getUserById(firstUserid);

	return {
		firstPost,
		posts: otherPosts,
		user,
	}
}

export async function getPostById(postId) {
	const response = await axios.get(`${BASE_URL}/posts/${postId}`);
	const post = response.data;
	const comments = await getCommentsByPostId(postId);
	const postsWithDetails = addDateAndPhoto([post]);
	const postWithComments = {
		...postsWithDetails[0],
		comments,
	};
	const otherPosts = await getPosts(2, 5);
	return {
		currentPost: postWithComments,
		otherPosts: otherPosts,
	};
}

export async function getUserById(userId) {
	const response = await axios.get(`${BASE_URL}/users/${userId}`);
	return response.data;
}


export async function getCommentsByPostId(postId) {
	const response = await axios.get(`${BASE_URL}/posts/${postId}/comments`);
	return response.data;
}

function addDateAndPhoto(posts) {
	return posts.map((post) => {
		const imageUrl = `https://picsum.photos/150?random=${post.id}`;

		const createdAt = new Date();
		const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

		const dayOfWeek = daysOfWeek[createdAt.getDay()];
		const dayOfMonth = createdAt.getDate();
		const month = monthsOfYear[createdAt.getMonth()];
		const year = createdAt.getFullYear();

		const formattedDate = `${dayOfWeek}, ${dayOfMonth} ${month} ${year}`;
		return {
			...post,
			imageUrl,
			formattedDate
		};
	});
}