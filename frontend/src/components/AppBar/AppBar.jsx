import css from './AppBar.module.css'
import LogoSvg from "../LogoSvg/LogoSvg.jsx";
import {useDispatch, useSelector} from "react-redux";
import {selectIsLoggedIn} from "../../redux/auth/selector.js";
import icons from "../../images/icons/icons.svg";
import {NavLink} from "react-router-dom";
import {logout} from "../../redux/auth/operation.js";

function AppBar() {
	const dispatch = useDispatch();
	const isLoggedIn = useSelector(selectIsLoggedIn);
	return (
			<div className={css.container}>
				<nav className={css.navigation}>
					<p className={css.navigationText}>Home</p>
					<p className={css.navigationText}>Feature</p>
					<NavLink to={'/blog'} style={{cursor: "pointer"}} className={({ isActive }) =>
							isActive ? `${css.navigationText} ${css.active}` : css.navigationText
					}>Blog</NavLink>
					<p  className={css.navigationText}>Testimonials</p>
				</nav>

				<svg fill={'#1E1E1E'} height={'27'} width={'154'}>
					<use href={`${icons}#icon-logo-kodix`}/>
				</svg>

				{isLoggedIn ? (
						<div onClick={() => dispatch(logout())} className={css.loginButt}>
							<p >Log out</p>
						</div>
				) : (
						<div className={css.buttWrap}>
							<NavLink to={'/signin'} className={css.loginButt}>
								<p  className={css.loginText}>Log in</p>
							</NavLink>
							<NavLink to={'/signup'} className={css.signupButton}>
								<p  className={css.signupText}>Sign up</p>
							</NavLink>
						</div>
				)
				}
			</div>
	)
			;
}

export default AppBar;