import React from "react";
import classes from "./Input.module.css";

export default function Input({
  inputDiv,
  value,
  setValue,
  inputClass,
  label,
  leftIcon,
  placeholder,
  type,
}) {
  return (
    <div className={[classes.inputDiv, inputDiv].join(" ")}>
      {label && <label className={classes.label}>{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
        value={value}
        className={[classes.input, inputClass].join(" ")}
      />
      {leftIcon && <div className={classes.leftIcon}>{leftIcon}</div>}
    </div>
  );
}
