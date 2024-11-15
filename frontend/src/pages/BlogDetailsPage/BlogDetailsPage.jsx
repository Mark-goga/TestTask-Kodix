import css from './BlogDetailsPage.module.css';
import {useEffect, useState} from "react";
import { fetchBlogBiId} from "../../feachApi.js";
import Loader from "../../components/Loader/Loader.jsx";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage.jsx";
import UseHandleTokenExpiration from "../../hooks/useHandleTokenExpiration.js";
import {useDispatch} from "react-redux";
import FeaturedBlogDetails from "../../components/FeaturedBlogDetails/FeaturedBlogDetails.jsx";
import {useParams} from "react-router-dom";
import BlogListDetails from "../../components/BlogListDetails/BlogListDetails.jsx";
import Coments from "../../components/Coments/Coments.jsx";

function BlogDetailsPage() {
	const {blogId} = useParams();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [data, setData] = useState();
	const dispatch = useDispatch();
	useEffect(() => {
		async function getBlog() {
			try {
				setLoading(true);
				setError(false);
				const data = await fetchBlogBiId(blogId);
				setData(data.data);
				setLoading(false);
			} catch (error) {
				await UseHandleTokenExpiration(error, dispatch, fetchBlogBiId, {setLoading, setError, setData});
			}
		}
		getBlog();
	}, [])
	if (loading && !data?.currentPost) {
		return <Loader/>
	}
	if (error && !data?.currentPost) {
		return <ErrorMessage errorMessage={error}/>
	}
	if (data?.currentPost && data?.otherPosts
	) {
		return (
				<div className={css.blogPageContainer}>
					<FeaturedBlogDetails currentPost={data?.currentPost}/>
					{/* як що потрібно коменти <Coments coments={data?.currentPost.comments}/>*/}
					<BlogListDetails blogs={data.otherPosts.posts}/>

				</div>
		);
	}
}

export default BlogDetailsPage;