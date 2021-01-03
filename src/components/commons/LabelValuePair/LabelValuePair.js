import React from "react";
import "./LabelValuePair.css";

const LabelValuePair = ({ label, value }) => (
  <p className={"container"}>
    <span className={"label"}>{label}</span>
    <span className={"value"}>{value}</span>
  </p>
);
export default LabelValuePair;
