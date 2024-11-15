import LoginForm from '../../components/LoginForm/LoginForm';
import LogoSvg from '../../components/LogoSvg/LogoSvg'
import globalCss from "../../styles/globalStyle.module.css";
import css from './LoginPage.module.css'
import PromoBanner from "../../components/PromoBanner/PromoBanner.jsx";

export default function LoginPage() {
	return (
			<div className={css.container}>
				<LogoSvg/>
				<div className={css.loginWrap}>
          <div style={{padding: "32px", width: "458px"}}>
            <LoginForm/>
          </div>
          <PromoBanner />
				</div>
			</div>
	)
}
