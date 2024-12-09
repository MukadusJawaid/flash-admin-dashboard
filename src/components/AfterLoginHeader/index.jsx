import React, { useState } from "react";
import { Col, Container, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import { IoIosArrowDown } from "react-icons/io";
import { useLocation, useNavigate } from "react-router";
import { NAV_DATA } from "../../data/app-data";
import classes from "./AfterLoginHeader.module.css";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import ClickAwayListener from "react-click-away-listener";
import { IoNotificationsSharp } from "react-icons/io5";
import profileImage from "../../assets/dummy_profile.png";

export default function AfterLoginHeader({ children }) {
  const { user, accessToken } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { pathname } = location;

  const [openSubMenuIndex, setOpenSubMenuIndex] = useState(null);

  const handleSubMenuClick = (index) => {
    setOpenSubMenuIndex(openSubMenuIndex === index ? null : index);
  };

  const logout = () => {
    // dispatch(logout)
    navigate("/");
  };

  const renderNavData = () => {
    return (
      <div className={classes.navItemList}>
        {NAV_DATA?.map((item, index) => (
          <div
            key={index}
            className={clsx(
              item?.subMenu?.length && classes.subMenuDiv,
              "cp",
              pathname !== item?.route && classes.itemList
            )}
          >
            <p
              onClick={() => navigate(item?.route)}
              className={pathname === item?.route ? classes.activeItem : ""}
            >
              {item?.label}
            </p>
            {item?.subMenu?.length > 0 && (
              <div onClick={() => handleSubMenuClick(index)}>
                <IoIosArrowDown color="var(--white-color)" />
                {listSubMenu(item?.subMenu, index)}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  const listSubMenu = (subMenu, index) => {
    return (
      openSubMenuIndex === index && (
        <ClickAwayListener onClickAway={() => setOpenSubMenuIndex(null)}>
          <div className={classes.subMenu}>
            {subMenu?.map((item, subIndex) => (
              <div
                key={subIndex}
                onClick={() => navigate(item?.route)}
                className={classes.subItem}
              >
                <p className={classes.subMenuItem}>{item?.label}</p>
              </div>
            ))}
          </div>
        </ClickAwayListener>
      )
    );
  };

  const renderUserData = () => {
    return (
      <div className={classes.userDataDiv}>
        <div className={clsx(classes.profileDiv, "cp")}>
          <img src={profileImage} alt="admin-profile" />
        </div>
        <div className={classes.notificationDiv}>
          <div className={classes.count}>{5}</div>
          <IoNotificationsSharp size={27} color="#FFC107" />
        </div>
        <h6 className="cp" onClick={logout}>
          Logout
        </h6>
      </div>
    );
  };

  return (
    <div className={classes.mainDiv}>
      <Container fluid>
        <Row>
          <Col md={3}>
            <h4 className={classes.header}>Welcome, Admin</h4>
          </Col>
          <Col md={6}>{renderNavData()}</Col>
          <Col md={3} className="d-flex justify-content-end">
            {renderUserData()}
          </Col>
        </Row>
        {children}
      </Container>
    </div>
  );
}
