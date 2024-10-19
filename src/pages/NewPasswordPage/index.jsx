import { useFormik } from "formik";
import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";

import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/Buttons";
import Input from "../../components/Input";
import { NewPasswordImage } from "../../config/imagePath";
import NewPasswordSchema from "../../schema/NewPasswordSchema";
import classes from "./NewPasswordPage.module.css";
import Toasts from "../../components/Toasts";

export default function NewPasswordPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;
  const otp = location?.state?.otp;

  const newPasswordFormik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: NewPasswordSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const handleSubmit = async (values) => {
    console.log("Form Submitted", values);
    navigate("/");
    Toasts({
      type: "success",
      message: "Password changed successfully.",
    });
  };

  useEffect(() => {
    if (!email && !otp) {
      navigate("/");
      return Toasts({
        type: "error",
        message: "Email and OTP is required.",
      });
    }
  }, []);

  return (
    <div className={classes.mainDiv}>
      <Container fluid>
        <Row>
          <Col md={12} lg={6} className="p-0">
            <div className={classes.leftColDiv}>
              <img src={NewPasswordImage} alt="logo" className={classes.logo} />
            </div>
          </Col>
          <Col md={12} lg={6}>
            <div className={classes.rightColDiv}>
              <h2 className={"h2"}>Set New Password</h2>

              <form
                onSubmit={(e) => {
                  e?.preventDefault();
                  newPasswordFormik.handleSubmit();
                }}
                className={classes.form}
              >
                <Input
                  type={"password"}
                  value={newPasswordFormik?.values?.password}
                  setValue={(val) =>
                    newPasswordFormik.setFieldValue("password", val)
                  }
                  inputDiv={classes.inputDiv}
                  placeholder={"Password Here..."}
                  label={"Password"}
                  errorText={
                    newPasswordFormik?.touched?.password &&
                    newPasswordFormik?.errors?.password
                  }
                />
                <Input
                  type={"password"}
                  value={newPasswordFormik?.values?.confirmPassword}
                  setValue={(val) =>
                    newPasswordFormik.setFieldValue("confirmPassword", val)
                  }
                  inputDiv={classes.inputDiv}
                  placeholder={"Confirm Password Here..."}
                  label={"Confirm Password"}
                  errorText={
                    newPasswordFormik?.touched?.confirmPassword &&
                    newPasswordFormik?.errors?.confirmPassword
                  }
                />

                <div className={classes.buttonDiv}>
                  <Button
                    type="submit"
                    label={"Submit"}
                    variant={"primary"}
                    buttonDivClass={classes.buttonDivClass}
                  />
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
