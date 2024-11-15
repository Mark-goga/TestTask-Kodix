import css from './ErrorMessage.module.css'

export default function ErrorMessage({errorMessage}) {
  return (
    <div  style={{height: 20}}>
      {errorMessage && <p data-testid='errorMessage' className={css.error}>{errorMessage}</p>}
    </div>
  )
}
