import { useFormik } from "formik";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { HiOutlineMail } from "react-icons/hi";

import Button from "../../components/Buttons";
import Input from "../../components/Input";
import { ForgotPasswordImage, logo } from "../../config/imagePath";
import ForgotPasswordSchema from "../../schema/ForgotPasswordSchema";
import classes from "./ForgotPasswordPage.module.css";
import { useNavigate } from "react-router-dom";

export default function ForgotPasswordPage() {
  const navigate = useNavigate();

  const forgotPasswordFormik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: ForgotPasswordSchema,
    onSubmit: (values) => {
      console.log(values);
      handleSubmit(values);
    },
  });

  const handleSubmit = async (values) => {
    console.log("Form Submitted", values);
  };

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
              <h2 className={"h2"}>Forgot Password</h2>
              <span className={classes.subText}>
                Enter your email address to receive an OTP code.
              </span>
              <form
                onSubmit={(e) => {
                  e?.preventDefault();
                  forgotPasswordFormik.handleSubmit();
                }}
                className={classes.form}
              >
                <Input
                  value={forgotPasswordFormik?.values?.email}
                  setValue={(val) =>
                    forgotPasswordFormik.setFieldValue("email", val)
                  }
                  leftIcon={<HiOutlineMail size={18} />}
                  inputDiv={classes.inputDiv}
                  placeholder={"Email Here..."}
                  label={"Email Id"}
                  errorText={
                    forgotPasswordFormik?.touched?.email &&
                    forgotPasswordFormik?.errors?.email
                  }
                />
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
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
