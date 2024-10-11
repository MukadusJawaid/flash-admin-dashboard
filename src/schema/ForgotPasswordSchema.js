// LoginSchema.js
import * as yup from "yup";

const ForgotPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
});

export default ForgotPasswordSchema;
