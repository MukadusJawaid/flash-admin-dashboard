import * as yup from "yup";

const OTPVerifyOtp = yup.object().shape({
  otp: yup
    .string()
    .required("OTP Code is required")
    .min(8, "OTP must be of 8 characters"),
  // .matches(
  //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>])/,
  //   "OTP must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
  // ),
});

export default OTPVerifyOtp;
