import { useState } from "react";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../redux/auth/operation";
import { selectError, selectStatus } from "../../redux/auth/selector";
import { validationSignUpSchema } from "../../validation/validationForm";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import css from './RegisterForm.module.css';
import Input from "../Input/Input.jsx";
import {useNavigate} from "react-router-dom";

const initialValue = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
};

export default function RegisterForm() {
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);
  const error = useSelector(selectError);
  const navigate = useNavigate();
  function handleNavigateTo() {
    navigate("/signin");
  }
  function handleSubmit(values , action) {
    dispatch(signup({ email: values.email, password: values.password , firstName: values.firstName, lastName: values.lastName }));
    action.resetForm();
  }

  return (
      <div>
        <Formik
          initialValues={initialValue}
          onSubmit={handleSubmit}
          validationSchema={validationSignUpSchema}
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
              <Input text={'Email address'} touched={touched.email} errors={errors.email} inputName={'email'} placeholderText={'Your email address'} handleChange={handleChange} handleBlur={handleBlur} values={values}/>

              <div className={css.inputNameWrap}>
                <Input text={'First Name'} touched={touched.firstName} errors={errors.firstName} inputName={'firstName'} placeholderText={'Your first name'} handleChange={handleChange} handleBlur={handleBlur} values={values}/>

                <Input text={'Last name'} touched={touched.lastName} errors={errors.lastName} inputName={'lastName'} placeholderText={'Your last name'} handleChange={handleChange} handleBlur={handleBlur} values={values}/>
              </div>
              <Input text={'Password'} touched={touched.password} errors={errors.password} inputName={'password'} placeholderText={'Enter Password'} handleChange={handleChange} handleBlur={handleBlur} values={values}/>

              {status === "failed" && error && <ErrorMessage errorMessage={error}/>}
              <a className={css.link}>Forgot password?</a>
              <button type="submit" className={css.submitBtn}>
                Sign Up
              </button>
            </form>
        )}
      </Formik>
        <div style={{marginTop: '48px'}}>
          <p>Already have an account?<a onClick={handleNavigateTo} className={css.link}>Sign In</a></p>
        </div>
      </div>
  );
}
