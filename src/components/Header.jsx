import React, { useState, useContext, useEffect, useCallback } from "react";
import logo from "../assets/icons/logo.svg";
import { AllContext } from "../context/store";
import "./styles/Header.scss";

const Header = () => {
  const {
    // statements: { s_modal },
    xDispatch,
  } = useContext(AllContext);

  const mOnClickButton = (e) => {
    e.preventDefault();
    xDispatch({ type: "TOGGLE" });
  };

  // console.log("Modal", s_modal);

  const [btn_navBar, setBtn_navBar] = useState(false);
  const [btn_search, setBtn_search] = useState(false);
  const [inn_search, setInn_search] = useState("");
  const [show_nav, setShow_nav] = useState({ navbar: "init" });

  const [y, setY] = useState(window.screenY);

  const handleScroll = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (y < 90) {
        setShow_nav({ navbar: "init" });
      } else if (y > window.scrollY) {
        setShow_nav({ navbar: "up" });
      } else if (y < window.scrollY) {
        setShow_nav({ navbar: "down" });
      }
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => { // by good practices
    setY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);


  return (
    <header className={`component-header ${show_nav.navbar}`}>
      
      <button
        style={{ background: "black", position: "fixed" }}
        onClick={mOnClickButton}
      >
        TEST
      </button>

      <section className={`header-bottom ${btn_search ? "btn_search" : ""}`}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="hb1-search--form"
        >
          <input
            type="search"
            placeholder="Search"
            onChange={(e) => {
              setInn_search(e.target.value);
            }}
            className="header-input"
            value={inn_search}
            onKeyUp={(e) => {
              e.key === "Enter" && mOnClickButton(e);
            }}
          />
        </form>
      </section>

      <section className="header-top">
        <button
          type="button"
          className={`ht1-burgerbutton ${btn_navBar ? "btn_navBar" : ""}`}
          onClick={() => setBtn_navBar(!btn_navBar)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <figure className="ht2-logo">
          <img src={logo} alt="Logo Mejor con Salud" />
        </figure>

        <section className="ht3-right">
          <button
            className={`right-button btn_search`}
            type="button"
            onClick={(e) => {
              setBtn_search((prev) => !prev);
            }}
          >
            <img src="https://i.ibb.co/5Rxd8d1/loupe.png" alt="" />
          </button>
          <button className="right-button darkMode">
            <img src={require("./../assets/icons/dark.svg").default} alt="" />
          </button>
          <button className="right-button user">
            <img src={require("../assets/icons/user.svg").default} alt="" />
          </button>
        </section>
      </section>

      <section className={`header-navBar ${btn_navBar ? "btn_navBar" : ""}`}>
        <nav>
          <ul>
            <li>
              <a href="#!">♥1</a>
            </li>
            <li>
              <a href="#!">♥2</a>
            </li>
            <li>
              <a href="#!">♥3</a>
            </li>
            <li>
              <a href="#!">♥4</a>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
};

export default Header;

/* 





<form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("first");
        }}
        className="ch3-search--form"
      >
        <span className="search-icon" />
        <input
          type="search"
          placeholder="Search Video Game By Name"
          onChange={(e) => {setSearch(e.target.value)}}
          className="header-input"
          value={search}
          onKeyUp={(e) => {
            e.key === "Enter" && mOnClickButton(e);
          }}
        />
        <button type="submit" className="second-icon" />
      </form>
*/
