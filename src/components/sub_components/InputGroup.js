import React  from "react";
import styles from "./styles/InputGroup.module.scss";

const MY_GROUP_INPUT = ({
  pLabel,
  pName,
  pFormValues,
  pSetFormValues,
  pOnChange,
  pRegEx,
  pLegendError,
  pInputValue,
}) => {
  const mValidation = (e) => {
    const { value, name } = e.target;
    if (pRegEx.test(value)) {
      pSetFormValues({
        ...pFormValues,
        [name]: {
          ...pFormValues[name],
          error: false,
        },
      });
    } else {
      pSetFormValues({
        ...pFormValues,
        [name]: {
          ...pFormValues[name],
          error: true,
        },
      });
    }
  };

  const vNullOrEmpty = () => {
    if (pFormValues[pName].value === null || pFormValues[pName].value === "") {
      return true;
    }
    return false;
  };

  return (
    <div className={styles["cmp-groupInput"]}>
      <input
        required
        name={pName}
        value={pFormValues[pName].value}
        onChange={pOnChange}
        type="search"
        className={styles.input}
        onBlur={(e) => mValidation(e)}
        onKeyUp={(e) => mValidation(e)}
      />
      <span className={styles.highlight} />
      <span className={styles.bar} />
      <label>{pLabel}</label>
      {pFormValues[pName].error && vNullOrEmpty() === false && (
        <span className={styles.error}>{pLegendError}</span>
      )}
    </div>
  );
};

export { MY_GROUP_INPUT };
