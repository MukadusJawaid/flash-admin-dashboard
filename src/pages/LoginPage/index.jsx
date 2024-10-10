import React from "react";
import { VscLock } from "react-icons/vsc";
import classes from "./LoginPage.module.css";
import { Container, Row, Col } from "react-bootstrap";
import { logo } from "../../config/imagePath";
import Input from "../../components/Input";
import { HiOutlineMail } from "react-icons/hi";
import { useFormik } from "formik";
import LoginSchema from "../../schema/LoginSchema";
import Button from "../../components/Buttons";

export default function LoginPage() {
  const loginFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className={classes.mainDiv}>
      <Container fluid>
        <Row>
          <Col md={12} lg={6} className="p-0">
            <div className={classes.leftColDiv}>
              <img src={logo} alt="logo" className={classes.logo} />
            </div>
          </Col>
          <Col md={12} lg={6}>
            <div className={classes.rightColDiv}>
              <h1 className={"h1"}>Login</h1>
              <div className={classes.inputMainDiv}>
                <Input
                  value={loginFormik?.values?.email}
                  setValue={(val) => loginFormik.setFieldValue("email", val)}
                  leftIcon={<HiOutlineMail size={18} />}
                  inputDiv={classes.inputDiv}
                  placeholder={"Email Here..."}
                  label={"Email Id"}
                  errorText={
                    loginFormik?.touched?.email && loginFormik?.errors?.email
                  }
                />
                <Input
                  type={"password"}
                  value={loginFormik?.values?.password}
                  setValue={(val) => loginFormik.setFieldValue("password", val)}
                  inputDiv={classes.inputDiv}
                  placeholder={"Password Here..."}
                  label={"Password"}
                />
              </div>
              <span className={classes.subText}>Forgot Password?</span>
              <Button
                label={"Submit"}
                variant={"primary"}
                buttonDivClass={classes.buttonDivClass}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
