import React from "react";

import classes from "./LoginPage.module.css";
import { Container, Row, Col } from "react-bootstrap";
import { logo } from "../../config/imagePath";
import Input from "../../components/Input";
import { HiOutlineMail } from "react-icons/hi";

export default function LoginPage() {
  return (
    <div className={classes.mainDiv}>
      <Container fluid>
        <Row>
          <Col md={6} className="p-0">
            <div className={classes.leftColDiv}>
              <img src={logo} alt="logo" className={classes.logo} />
            </div>
          </Col>
          <Col md={6}>
            <div className={classes.rightColDiv}>
              <h1 className={"h1"}>Login</h1>
              <div className={classes.inputMainDiv}>
                <Input
                  leftIcon={<HiOutlineMail />}
                  inputDiv={classes.inputDiv}
                  label={"Email Id"}
                />
                <Input inputDiv={classes.inputDiv} label={"Password"} />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
