import BlogItem from '../BlogItem/BlogItem.jsx';
import css from './BlogList.module.css';

function BlogList({blogs}) {
	return (
			<div className={css.blogList}>
				{blogs.map(blog => (
						<BlogItem key={blog.id} blog={blog} />
				))}
			</div>
	);
}

export default BlogList;
