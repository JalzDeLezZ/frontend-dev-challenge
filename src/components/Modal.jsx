import React, { useContext } from "react";
import { AllContext } from "../context/store.js";
import "./styles/Modal.scss";

const Modal = () => {
  const { xDispatch } = useContext(AllContext);

  return (
    <div className="CMP-Modal" onClick={(e) => e.stopPropagation()}>
      <div className="cp_content-btn">
        <button
          className="cp_btn-exit"
          onClick={() => {
            xDispatch({ type: "TOGGLE" });
          }}
        >
        <span className="top-key"></span>
        <span className="text">EXIT</span>
        <span className="bottom-key-1"></span>
        <span className="bottom-key-2"></span>
        </button>
      </div>
      <section className="cp_container">
        <h1>"ASDFASDFASDFASDF"</h1>
      </section> 
    </div>
  );
};

export { Modal };
