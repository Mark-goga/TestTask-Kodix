import RegisterForm from  "../../components/RegisterForm/RegisterForm.jsx"
import LogoSvg from '../../components/LogoSvg/LogoSvg'
import css from './RegisterPage.module.css'
import PromoBannerSignup from "../../components/PromoBannerSignup/PromoBannerSignup.jsx";

export default function RegisterPage() {
	return (
			<div className={css.container}>
				<LogoSvg/>
				<div className={css.loginWrap}>
          <div style={{padding: "32px", width: "458px"}}>
            <RegisterForm/>
          </div>
          <PromoBannerSignup />
				</div>
			</div>
	)
}
