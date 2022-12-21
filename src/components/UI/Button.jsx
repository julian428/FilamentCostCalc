import React, { useEffect } from "react";
import classes from "./Input.module.css";

const Button = (props) => {
  useEffect(() => {
    document.getElementById("button").addEventListener(props.when, props.exec);
  });
  return (
    <section className={classes.main}>
      <button id="button" type={props.type} className={classes.input}>
        {props.children}
      </button>
    </section>
  );
};

export default Button;
