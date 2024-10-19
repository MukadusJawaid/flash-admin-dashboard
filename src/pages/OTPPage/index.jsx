import { useFormik } from "formik";
import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";

import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/Buttons";
import Input from "../../components/Input";
import Toasts from "../../components/Toasts";
import { ForgotPasswordImage } from "../../config/imagePath";
import OTPVerifyOtp from "../../schema/OTPVerificationSchema";
import classes from "./OTPPage.module.css";
import { PiLockKeyFill } from "react-icons/pi";

export default function OTPPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location?.state?.email;

  const otpVerifyFormik = useFormik({
    initialValues: {
      otp: "",
    },
    validationSchema: OTPVerifyOtp,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });
  console.log(email);

  const handleSubmit = async (values) => {
    console.log("Form Submitted", values);
    navigate("/new-password", { state: { email: email, otp: values?.otp } });
  };

  useEffect(() => {
    if (!email) {
      navigate("/");
      return Toasts({
        type: "error",
        message: "Email is required.",
      });
    }
  }, []);

  return (
    <div className={classes.mainDiv}>
      <Container fluid>
        <Row>
          <Col md={12} lg={6} className="p-0">
            <div className={classes.leftColDiv}>
              <img
                src={ForgotPasswordImage}
                alt="logo"
                className={classes.logo}
              />
            </div>
          </Col>
          <Col md={12} lg={6}>
            <div className={classes.rightColDiv}>
              <h2 className={"h2"}>OTP Verification</h2>
              <span className={classes.subText}>
                Please enter One Time Password (OTP) sent to{" "}
                {`${email ? email : `your registered email`} `}
              </span>
              <form
                onSubmit={(e) => {
                  e?.preventDefault();
                  otpVerifyFormik.handleSubmit();
                }}
                className={classes.form}
              >
                <div className={classes.otpVerification}>
                  <Input
                    placeholder={"Enter One Time Password Here"}
                    leftIcon={<PiLockKeyFill size={18} />}
                    type={"number"}
                    value={otpVerifyFormik?.values?.otp}
                    setValue={(val) =>
                      otpVerifyFormik?.setFieldValue("otp", val)
                    }
                    errorText={
                      otpVerifyFormik?.touched?.otp &&
                      otpVerifyFormik?.errors?.otp
                    }
                  />
                </div>

                <div className={classes.buttonDiv}>
                  <Button
                    type="button"
                    label={"Cancel"}
                    variant={"primary-outlined"}
                    onClick={() => {
                      navigate(-1);
                    }}
                    buttonDivClass={classes.buttonDivClass}
                  />
                  <Button
                    type="submit"
                    label={"Submit"}
                    variant={"primary"}
                    buttonDivClass={classes.buttonDivClass}
                  />
                </div>
                <span className={classes.subTextTwo}>
                  Didn’t receive the OTP?{" "}
                  <span className={classes.resendTextClass}>Resend</span>
                </span>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
