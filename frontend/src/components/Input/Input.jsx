import css from "../RegisterForm/RegisterForm.module.css";
import {useSelector} from "react-redux";
import {selectError, selectStatus} from "../../redux/auth/selector.js";

function Input({text, inputName, errors, touched, placeholderText, handleChange, handleBlur , values}) {
	const status = useSelector(selectStatus);

	return (
			<div className={css.inputWrapper}>
				<p className={css.inputText}>{text}</p>
				<input
						name={inputName}
						placeholder={placeholderText}
						onChange={handleChange}
						onBlur={handleBlur(inputName)}
						value={values[inputName]}
						className={`${css.input} ${status === 'failed' ? css.inputErrorServer : ""}`}
				/>
				{errors && touched && (
						<div className={css.errorMessage}>{errors}</div>
				)}
			</div>
	);
}

export default Input;