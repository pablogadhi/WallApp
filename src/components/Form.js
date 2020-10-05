import styles from "./Form.module.css";

import React from "react";
import FormItem from "./FormItem";

/**
 * Reusable component to render any type of form.
 * @param {list} props.items List of objects with the form {label: string, type: string, stateSetter: func}
 *                           used to populate the form
 * @param {function} props.submit Function to call with the submit button
 * @param {string} props.submitText Test to display on the submit button
 *
 */
const Form = (props) => {
  const items = props.items.map((item) => (
    <FormItem
      label={item.label}
      type={item.type}
      stateSetter={item.stateSetter}
    ></FormItem>
  ));

  return (
    <form className={styles.Form}>
      {items}
      <button type="button" className={styles.FormBtn} onClick={props.submit}>
        {props.submitText}
      </button>
    </form>
  );
};

export default Form;
