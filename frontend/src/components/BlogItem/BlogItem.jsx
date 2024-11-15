import styles from './BlogItem.module.css';
import {NavLink} from "react-router-dom";

function BlogItem({blog: {title, formattedDate, body, imageUrl, id}}) {
	return (

			<div className={styles.blogItem}>
				<NavLink style={{textDecoration: "none"}} to={`/blog/${id}`}>
					<img className={styles.image} alt={title} src={imageUrl}/>
					<span className={styles.date}>{formattedDate}</span>
					<h3 className={styles.title}>{title}</h3>
					<p className={styles.description}>{body}</p>
				</NavLink>
			</div>

	);
}

export default BlogItem;
