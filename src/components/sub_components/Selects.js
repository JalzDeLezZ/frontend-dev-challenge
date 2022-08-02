import React from "react";
import styles from "./styles/Selects.module.scss";

const MY_SELECT = ({
  pAOptions,
  pLabel,
  pName,
  pFormValues,
  pSetFormValues,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;

    let vMatch = pFormValues[name].value.find((item) => item === value);

    if (!vMatch) {
      pSetFormValues({
        ...pFormValues,
        [name]: {
          ...pFormValues[name],
          value: [...pFormValues[name].value, value],
        },
      });
    } else {
      alert("This option is already selected");
    }
  };

  return (
    <div className={styles["cmp-my--select"]}>
      <label htmlFor="iMySelect">{pLabel}</label>
      <select
        id="iMySelect"
        className={styles["slc_skills"]}
        name={pName}
        onChange={handleChange}
      >
        {pAOptions.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MY_SELECT;
