import styles from './BlogItemDetails.module.css';
import {NavLink} from "react-router-dom";

function BlogItemDetails({blog: {title, formattedDate, body, imageUrl, id}}) {
	return (

			<div className={styles.blogItem}>
				<NavLink style={{textDecoration: "none"}} to={`/blog/${id}`}>
					<div className={styles.itemWrap}>
						<img className={styles.image} alt={title} src={imageUrl}/>
						<div>
							<span className={styles.date}>{formattedDate}</span>
							<h3 className={styles.title}>{title}</h3>
							<p className={styles.description}>{body}</p>
						</div>
					</div>
				</NavLink>
			</div>

	);
}

export default BlogItemDetails;
