import icons from "../../images/icons/icons.svg";
import styles from './FeaturedBlog.module.css';
import {NavLink} from "react-router-dom";

function FeaturedBlog({firstPost: {id, body, title, imageUrl, formattedDate}, userName}) {
	return (
			<div className={styles.featuredBlog}>
				<div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
					<svg width={'18'} height={'18'} viewBox={'0 0 18 18'} fill={'#1FFF1A'}>
						<use href={`${icons}#icon-stars`}/>
					</svg>
					<p className={styles.featuredLabel}>Featured</p>
				</div>
				<h1 className={styles.title}>{title}</h1>
				<p className={styles.subtitle}>{body}</p>
				<div className={styles.info}>
					<span className={styles.timeText}>{formattedDate}</span>
					<span className={styles.author}>{userName}</span>
				</div>
				<div className={styles.imagePlaceholder}>

					<NavLink to={`/blog/${id}`} style={{width:'100%', height:'100%'}}>
						<img
								src={imageUrl}
								alt="Random Image"
								style={{
									width: '100%',
									height: '100%',
									objectFit: 'cover',
									objectPosition: 'center',
									borderRadius: '24px'
								}}
						/>
					</NavLink>
				</div>
				<div className={styles.socials}>
					<p>Share to</p>
					<div className={styles.socialIcons}>
					</div>
				</div>
			</div>
	);
}

export default FeaturedBlog;
