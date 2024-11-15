import css from './BlogListDetails.module.css';
import BlogItemDetails from "../BlogItemDetails/BlogItemDetails.jsx";

function BlogListDetails({blogs}) {
	return (
			<div className={css.blogList}>
				{blogs.map(blog => (
					<BlogItemDetails blog={blog} key={blog.id} />
				))}
			</div>
	);
}

export default BlogListDetails;
