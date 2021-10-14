import React from "react";
import "./styles.css";

const Button = ({ onClick, children, className, ...rest }) => {
  return (
    <button className={className} onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

export default Button;
