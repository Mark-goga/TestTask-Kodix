import * as postsService from '../secvices/posts.js';
import {getUserById} from '../secvices/posts.js';
import createError from "http-errors";

export async function getPostsController(req, res) {
	const {page, perPage} = req.query;

	const data = await postsService.getPosts({page, perPage});


	res.status(200).json({
		status: 200,
		message: 'success',
		data
	});
}

export async function getPostDetailsController(req, res) {
	const {postId} = req.params;

	const data = await postsService.getPostById(postId);


	res.status(200).json({
		status: 200,
		message: 'success',
		data
	});
}


