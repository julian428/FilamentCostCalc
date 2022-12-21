import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  const getValue = (event) => {
    const f = props.setValue;
    const value = Math.ceil(parseFloat(event.target.value));
    f(value);
  };
  return (
    <section className={classes.main}>
      <label htmlFor="input" className={classes.label}>
        {props.label}
      </label>
      <input
        type={props.type}
        name="input"
        id="input"
        placeholder={props.placeholder}
        onChange={getValue}
        className={classes.input}
      />
    </section>
  );
};

export default Input;
