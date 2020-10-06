import styles from "./Form.module.css";

import React from "react";

/**
 * A component used to render an input with its label in a Form.
 * @param {string} props.label Label for the input
 * @param {string} props.type The input type
 * @param {function} props.stateSetter The function that sets the state
 *                                 with the input value.
 */
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
