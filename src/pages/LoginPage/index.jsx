import React, { useEffect } from "react";
import { VscLock } from "react-icons/vsc";
import classes from "./LoginPage.module.css";
import { Container, Row, Col } from "react-bootstrap";
import { logo } from "../../config/imagePath";
import Input from "../../components/Input";
import { HiOutlineMail } from "react-icons/hi";
import { useFormik } from "formik";
import LoginSchema from "../../schema/LoginSchema";
import Button from "../../components/Buttons";
import { useNavigate } from "react-router";

export default function LoginPage() {
  const navigate = useNavigate();

  const loginFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      console.log(values);
      handleSubmit(values);
    },
  });

  const handleSubmit = async (values) => {
    navigate("/dashboard");
    console.log("Form Submitted", values);
  };

  useEffect(() => {
    const handleEnterKeyPress = (event) => {
      if (event?.key === "Enter") {
        loginFormik.handleSubmit();
      }
    };

    document.addEventListener("keydown", handleEnterKeyPress);

    return () => {
      document.removeEventListener("keydown", handleEnterKeyPress);
    };
  }, [loginFormik]);

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

              <form
                onSubmit={(e) => {
                  e?.preventDefault();
                  loginFormik.handleSubmit();
                }}
                className={classes.form}
              >
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
                    setValue={(val) =>
                      loginFormik.setFieldValue("password", val)
                    }
                    inputDiv={classes.inputDiv}
                    placeholder={"Password Here..."}
                    label={"Password"}
                    errorText={
                      loginFormik?.touched?.password &&
                      loginFormik?.errors?.password
                    }
                  />
                </div>
                <span
                  className={classes.subText}
                  onClick={() => navigate(`/forgot-password`)}
                >
                  Forgot Password?
                </span>

                <Button
                  type="submit"
                  label={"Submit"}
                  variant={"primary"}
                  buttonDivClass={classes.buttonDivClass}
                />
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
