import React from "react";
import styles from "./styles/InputGroup.module.scss";

const MY_GROUP_INPUT = () => {
  return (
    <div className={styles["cmp-groupInput"]}>
      <input required type="search" className={styles.input} />
      <span className={styles.highlight} />
      <span className={styles.bar} />
      <label>Name</label>
    </div>
  );
};

export {MY_GROUP_INPUT};
