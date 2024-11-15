import css from './PromoBannerSignup.module.css'
import PromoBannerItem from "../PromoBannerItem/PromoBannerItem.jsx";

function PromoBannerSignup() {
	return (
			<div className={css.container}>
				<div><h2 className={css.title}>Get Your FREE  &nbsp; &nbsp; &nbsp; 30-Days Trial Now!</h2>
					<div style={{display: "flex", gap: '16px', flexDirection: 'column'}}>

						<PromoBannerItem title={'Absolutely FREE'} text={'No hidden charges, No credit card required'}
														 nameIcon={'icon-stars'}/>

						<PromoBannerItem title={'Fast & Easy'} text={'Get access instantly, no downloads required'}
														 nameIcon={'icon-dynamic'}/>

						<PromoBannerItem title={'Your Own Data'} text={'Enjoy the Free Trial with your company data'}
														 nameIcon={'icon-assignment'}/>

						<PromoBannerItem title={'Unlimited Features'}
														 text={'Access all features of the world\'s #1 business software!'}
														 nameIcon={'icon-monetization'}/>
					</div>
				</div>
				<p className={css.text}>Call us at <a style={{color: '#1fff1a'}}>800 1301 448</a></p>
			</div>
	);
}

export default PromoBannerSignup;