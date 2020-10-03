import styles from "./Form.module.css";

import React from "react";

const FormItem = (props) => {
  return (
    <label className={styles.FormItem}>
      {props.label}
      <input
        type={props.type}
        onChange={(e) => props.stateSetter(e.target.value)}
      ></input>
    </label>
  );
};

export default FormItem;
