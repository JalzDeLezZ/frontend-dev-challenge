import React from "react";

import styles from "./styles/Buttons.module.scss";

const MY_BTN_DOWN = () => {
  return (
    <button className={styles.scrolldown}>
      <div className={styles.chevrons}>
        <div className={styles.chevrondown} />
        <div className={styles.chevrondown} />
      </div>
    </button>
  );
};

export  {MY_BTN_DOWN};
