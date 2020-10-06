import styles from "./Form.module.css";

import React from "react";
import FormItem from "./FormItem";

/**
 * Reusable component to render any type of form.
 * @param {list} props.items List of objects with the form {label: string, type: string, stateSetter: func}
 *                           used to populate the form
 * @param {function} props.submit Function to call with the submit button
 * @param {string} props.submitText Test to display on the submit button
 * @param {function} props.loading Boolean used to display de loading spinner
 *
 */
const Form = (props) => {
  const items = props.items.map((item, index) => (
    <FormItem
      key={index}
      label={item.label}
      type={item.type}
      stateSetter={item.stateSetter}
    ></FormItem>
  ));

  return (
    <form className={styles.Form}>
      {items}
      <div className={styles.ErrorMsg}>{props.errorMsg}</div>
      <div className={styles.SubmitContainer}>
        {props.loading && <div className={styles.SubmitLoader} />}
        <div className={styles.FormBtnContainer}>
          <button
            type="button"
            className={styles.FormBtn}
            onClick={props.submit}
            disabled={props.loading}
          >
            {props.submitText}
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
