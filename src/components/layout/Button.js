import React from "react";
import styles from "./form.module.css"
const Button = (props) => {
  return (
    <>
      <button
        className={styles.button}
        style={props.style }
        onClick={props.onClick}
        type={`${props.type ? props.type : "button"}`}
          >{ props.children}</button>
    </>
  );
};
export default Button;
