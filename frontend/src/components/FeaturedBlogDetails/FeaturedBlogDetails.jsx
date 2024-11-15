import styles from './FeaturedBlogDetails.module.css';

function FeaturedBlogDetails({currentPost: {body, title, imageUrl, formattedDate}}) {
	return (
			<div className={styles.featuredBlog}>
				<h1 className={styles.title}>{title}</h1>
				<p className={styles.subtitle}>{body}</p>
				<div className={styles.info}>
					<span className={styles.timeText}>{formattedDate}</span>
				</div>
				<div className={styles.imagePlaceholder}>
					<img
							src={imageUrl}
							alt="Random Image"
							style={{
								width: "553px",
								height: "246px",
								objectFit: 'cover',
								objectPosition: 'center',
								borderRadius: '24px'
							}}
					/>
				</div>
				<div className={styles.socials}>
					<p>Share to</p>
					<div className={styles.socialIcons}>
					</div>
				</div>
			</div>
	);
}

export default FeaturedBlogDetails;
