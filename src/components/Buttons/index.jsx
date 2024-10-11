import React from "react";
import classes from "./Buttons.module.css";

export default function Button({
  buttonDivClass,
  buttonClass,
  label,
  onClick,
  variant,
  type,
}) {
  return (
    <div className={[classes.buttonDiv, buttonDivClass].join(" ")}>
      <button
        type={type}
        className={[classes.button, buttonClass].join(" ")}
        onClick={onClick}
        color-variant={variant}
      >
        {label && label}
      </button>
    </div>
  );
}
