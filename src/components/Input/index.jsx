import React, { useState } from "react";
import classes from "./Input.module.css";
import { BiLockAlt, BiLockOpenAlt } from "react-icons/bi";

export default function Input({
  inputDiv,
  value,
  setValue,
  inputClass,
  label,
  leftIcon,
  placeholder,
  type,
  errorText,
}) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const inputType =
    type === "password" && !isPasswordVisible ? "password" : "text";

  return (
    <div className={[classes.inputDiv, inputDiv].join(" ")}>
      {label && <label className={classes.label}>{label}</label>}
      <div className={classes.inputContainer}>
        <input
          type={inputType}
          placeholder={placeholder}
          onChange={(e) => setValue(e.target.value)}
          value={value}
          className={[classes.input, inputClass].join(" ")}
        />
        {errorText && <p className={classes.errorText}>{`${errorText}*`}</p>}
        {leftIcon && <div className={classes.leftIcon}>{leftIcon}</div>}

        {type === "password" && (
          <div
            className={[classes.toggleIcon, classes?.leftIcon].join(" ")}
            onClick={togglePasswordVisibility}
          >
            {isPasswordVisible ? (
              <BiLockOpenAlt size={18} aria-label="Hide password" />
            ) : (
              <BiLockAlt size={18} aria-label="Show password" />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
