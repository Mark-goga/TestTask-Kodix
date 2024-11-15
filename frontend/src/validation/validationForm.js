import * as Yup from "yup";

export const validationAuthSchema = Yup.object().shape({
	email: Yup.string()
			.email("Must be a valid email address")
			.min(3, "Too short")
			.max(50, "Too long")
			.required("required"),
	password: Yup.string()
			.min(3, "Too short")
			.max(50, "Too long")
			.required("required"),
});
export const validationSignUpSchema = Yup.object().shape({
	email: Yup.string()
			.email("Must be a valid email address")
			.min(3, "Too short")
			.max(50, "Too long")
			.required("required"),
	password: Yup.string()
			.min(3, "Too short")
			.max(50, "Too long")
			.required("required"),
	firstName: Yup.string()
			.min(3, "Too short")
			.max(50, "Too long")
			.required("required"),
  lastName: Yup.string()
      .min(3, "Too short")
      .max(50, "Too long")
      .required("required"),
})