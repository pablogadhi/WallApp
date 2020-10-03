import styles from "./Form.module.css";

import React from "react";
import FormItem from "./FormItem";

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
