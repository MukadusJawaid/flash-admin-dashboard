import React from "react";
import classes from "./Buttons.module.css";

export default function Button({
  buttonDivClass,
  buttonClass,
  label,
  onClick,
  variant,
}) {
  return (
    <div className={[classes.buttonDiv, buttonDivClass].join(" ")}>
      <button
        className={[classes.button, buttonClass].join(" ")}
        onClick={onclick}
        color-variant={variant}
      >
        {label && label}
      </button>
    </div>
  );
}
