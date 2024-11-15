import * as postsService from '../secvices/posts.js';
import {getUserById} from '../secvices/posts.js';

export async function getPostsController(req, res) {
	const {page, perPage} = req.query;

	const data = await postsService.getPosts({page, perPage});

	const postsWithDetails = addDateAndPhoto(data);

	const firstUserid = data[0].userId;

	const user = await getUserById(firstUserid);
	res.status(200).json({
		status: 200,
		message: 'success',
		data: {
			posts: postsWithDetails,
			user,
		},
	});
}

export async function getPostDetailsController(req, res) {
	const {postId} = req.params;

	const post = await postsService.getPostById(postId);
	const comments = await postsService.getCommentsByPostId(postId);
	const postsWithDetails = addDateAndPhoto([post]);
	const postWithComments = {
		...postsWithDetails[0],
		comments,
	};

	res.status(200).json({
		status: 200,
		message: 'success',
		data: postWithComments,
	});
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