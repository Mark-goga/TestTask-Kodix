import css from './PromoBannerItem.module.css';
import icons from "../../images/icons/icons.svg"
function PromoBannerItem({nameIcon , title, text}) {
	return (
			<div className={css.itemWrap}>
				<svg width={'20'} height={'20'} fill={'#1FFF1A'} viewBox={'0 0 5 5'}>
					<use href={`${icons}#${nameIcon}`}/>
				</svg>
				<div>
					<p className={css.title}>{title}</p>
					<p className={css.text}>{text}</p>
				</div>
			</div>
	);
}

export default PromoBannerItem;