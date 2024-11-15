import { useState } from "react";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { singin } from "../../redux/auth/operation";
import { selectError, selectStatus } from "../../redux/auth/selector";
import { validationAuthSchema } from "../../validation/validationForm";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import css from './LoginForm.module.css';
import {useNavigate} from "react-router-dom";

const initialValue = {
  email: "",
  password: "",
};

export default function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);
  const error = useSelector(selectError);
  function handleNavigateTo() {
    navigate("/signup");
  }

  function handleSubmit(values , action) {
    dispatch(singin({ email: values.email, password: values.password }));
    action.resetForm();
  }

  return (
      <div>
        <Formik
          initialValues={initialValue}
          onSubmit={handleSubmit}
          validationSchema={validationAuthSchema}
      >
        {({
            handleChange,
            handleSubmit,
            handleBlur,
            values,
            errors,
            touched,
          }) => (
            <form onSubmit={handleSubmit} className={css.form}>
              <h2 className={css.title}>Sign in</h2>
              <div className={css.inputWrapper}>
                <p className={css.inputText}>Email address</p>
                <input
                    name="email"
                    placeholder="Your email address"
                    onChange={handleChange}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    className={`${css.input} ${status === 'failed' ? css.inputErrorServer : ""}`}
                />
                {errors.email && touched.email && (
                    <div className={css.errorMessage}>{errors.email}</div>
                )}
              </div>

              <div className={css.inputWrapper}>
                <p className={css.inputText}>Password</p>
                <input
                    name="password"
                    type="password"
                    placeholder="Введіть пароль"
                    onChange={handleChange}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    className={`${css.input} ${status === 'failed' ? css.inputErrorServer : ""}`}
                />
                {errors.password && touched.password && (
                    <div className={css.errorMessage}>{errors.password}</div>
                )}
              </div>

              {status === "failed" && error && <ErrorMessage errorMessage={error}/>}
              <a className={css.link}>Forgot password?</a>
              <button type="submit" className={css.submitBtn}>
                Sign In
              </button>
            </form>
        )}
      </Formik>
        <div style={{marginTop: '48px'}}>
          <p>Don’t have an account?<a onClick={handleNavigateTo} className={css.link}>Sign Up</a></p>
        </div>
      </div>
  );
}
