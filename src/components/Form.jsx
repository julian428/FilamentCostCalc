import React, { Fragment, useState } from "react";
import Input from "./UI/Input";
import Button from "./UI/Button";
import classes from "./UI/Input.module.css";

const Form = () => {
  const [material, setMaterial] = useState(0.25);
  const [weight, setWeight] = useState(0);
  const [time, setTime] = useState(0);
  const price = document.querySelector("#price");
  const getValue = () => {
    const material = document.querySelector("#select");
    const cost = parseFloat(material.value);
    setMaterial(cost);
  };
  const wycen = () => {
    let multiplyer =
      time < 2
        ? 1
        : time < 6
        ? 1.5
        : time < 11
        ? 2
        : time < 21
        ? 3
        : time < 51
        ? 5
        : 10;
    price.innerHTML =
      Math.ceil(weight * material) +
      " zł" +
      " + " +
      time * multiplyer +
      " zł" +
      "=" +
      (Math.ceil(weight * material) + time * multiplyer) +
      " zł";
  };
  return (
    <main
      className={classes.main}
      style={{
        width: "100vw",
        height: "fit-content",
      }}
    >
      <h1>Wycena druku</h1>
      <form className={classes.main}>
        <section className={classes.main}>
          <label htmlFor="select" className={classes.label}>
            Materiał
          </label>
          <select
            name="select"
            id="select"
            defaultValue={1}
            className={classes.input}
            onChange={getValue}
          >
            <option value="0.25">PLA</option>
            <option value="0.30">PETG</option>
            <option value="0.38">ABS</option>
            <option value="0.40">ASA</option>
          </select>
        </section>
        <Input
          label="Waga"
          type="number"
          placeholder="W gramach"
          setValue={setWeight}
        />
        <Input
          label="Czas"
          type="number"
          placeholder="W godzinach"
          setValue={setTime}
        />
        <Button type="button" exec={wycen} when="click">
          Wyceń
        </Button>
      </form>
      <h3 id="price">0zł</h3>
    </main>
  );
};

export default Form;
