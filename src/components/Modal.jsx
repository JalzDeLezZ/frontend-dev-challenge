import React, { useContext, useState } from "react";
import { AllContext } from "../context/store.js";
import "./styles/Modal.scss";
import Favorites from "./sub_components/Favorites.jsx";
import Profile from "./sub_components/Profile.jsx";

const Modal = () => {
  const { xDispatch } = useContext(AllContext);

  const [tab, setTab] = useState("1");

  const mTabChange = (e) => {
    setTab(e.target.value);
  };

  const cmp_tab = () => {
    switch (tab) {
      case "0":
        return <Profile />;
      case "1":
        return <Favorites />;
      default:
        return <Profile />;
    }
  };
  
  return (
    <section className="component-modal" onClick={(e) => e.stopPropagation()}>
      <div className="modal-exit--btn">
        <button
          className="cmp-exit--btn"
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
      <nav className="modal-tab--nav">
        <ul>
          <li>
            <button type="button" value={"0"} onClick={mTabChange}>
              Profile
            </button>
          </li>
          <span className="cmp-line_divider_oblique">/</span>
          <li>
            <button type="button" value={"1"} onClick={mTabChange}>
              Favorites
            </button>
          </li>
        </ul>
      </nav>
      <section className="modal-content cmp-scrollbar">{cmp_tab()}</section>
    </section>
  );
};

export { Modal };
