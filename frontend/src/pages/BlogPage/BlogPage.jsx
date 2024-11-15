import css from './BlogPage.module.css';
import BlogList from "../../components/BlogList/BlogList.jsx";
import FeaturedBlog from "../../components/FeaturedBlog/FeaturedBlog.jsx";
import {useEffect, useState} from "react";
import {fetchAllBlog} from "../../feachApi.js";
import Loader from "../../components/Loader/Loader.jsx";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage.jsx";
import UseHandleTokenExpiration from "../../hooks/useHandleTokenExpiration.js";
import {useDispatch} from "react-redux";

function BlogPage() {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [data, setData] = useState();
	const dispatch = useDispatch();
	useEffect(() => {
		async function getBlog() {
			try {
				setLoading(true);
				setError(false);
				const data = await fetchAllBlog()
				console.log('data', data);
				setData(data.data);
				setLoading(false);
			} catch (error) {
				await UseHandleTokenExpiration(error, dispatch, fetchAllBlog, {setLoading, setError, setData});
			}
		}
		getBlog();
	}, [])

	if (loading && !data?.firstPost) {
		return <Loader/>
	}
	if (error && !data?.firstPost) {
		return <ErrorMessage errorMessage={error}/>
	}
	if (data?.firstPost && data?.posts) {
		return (
				<div className={css.blogPageContainer}>
					<FeaturedBlog firstPost={data?.firstPost} userName={data?.user.username}/>
					<BlogList blogs={data?.posts} />
				</div>
		);
	}
}

export default BlogPage;