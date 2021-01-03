import React from "react";

const Input = ({ name, label, ...restProps }) => (
  <section>
    <label htmlFor={name}>{label}</label>
    <input name={name} {...restProps} />
  </section>
);
export default Input;
