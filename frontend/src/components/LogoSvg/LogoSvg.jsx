import css from './LogoSvg.module.css';
import icons from '../../images/icons/icons.svg';

export default function LogoSvg() {
  return (
    <div className={css.logoContainer}>
      <svg fill={'#1E1E1E'} height={'42'} width={'240'}>
        <use href={`${icons}#icon-logo-kodix`}/>
      </svg>
    </div>
  )
}
