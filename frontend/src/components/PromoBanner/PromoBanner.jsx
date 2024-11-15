import css from './PromoBanner.module.css'

function PromoBanner() {
	return (
			<div className={css.container}>
				<h2 className={css.title}>Kodix <div className={css.proButtonWrap}><span className={css.proButton}>pro</span></div></h2>
				<p className={css.promoText}>Unlimited traffic, strategic support, and AI-driven upsells</p>
				<a className={css.link}>Learn More</a>
			</div>
	);
}

export default PromoBanner;