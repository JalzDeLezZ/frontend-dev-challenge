import React from "react";

import styles from "./styles/Buttons.module.scss";

const MY_BTN_DOWN = () => {
  return (
    <div className={styles.scrolldown}>
      <div className={styles.chevrons}>
        <div className={styles.chevrondown} />
        <div className={styles.chevrondown} />
      </div>
    </div>
  );
};

const MY_BTN_SEND = () => (
  <button className={styles["cmp_send--btn"]} type="submit">
    <div className={styles["svg-wrapper-1"]}>
      <div className={styles["svg-wrapper"]}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={24}
          height={24}
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            fill="currentColor"
            d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
          />
        </svg>
      </div>
    </div>

    <span>Send</span>
  </button>
);

const MY_BTN_MAN = (props) => (
  <button id={props.id} className={styles["cmp-details--btn"]} onClick={props.onClick}>
    <span>DETAILS</span>
  </button>
);
export { MY_BTN_DOWN, MY_BTN_SEND, MY_BTN_MAN };
