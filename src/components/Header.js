import React, { useState, useContext, useEffect, useCallback } from "react";
import logo from "../assets/icons/logo.svg";
import { AllContext } from "../context/store";
import "./styles/Header.scss";

const Header = () => {
  const {
    // statements: { s_darkMode },
    xDispatch,
  } = useContext(AllContext);

  const mOnClickButton = (e) => {
    e.preventDefault();
    xDispatch({ type: "TOGGLE" });
  };

  const mDarkMode = (e) => {
    e.preventDefault();
    xDispatch({ type: "DARK" });
  };

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

  useEffect(() => {
    // by good practices
    setY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <header className={`component-header ${show_nav.navbar}`}>
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
            // onKeyUp={(e) => {
            //   e.key === "Enter" && mOnClickButton(e);
            // }}
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
          <button className="right-button darkMode"
          onClick={mDarkMode}
          >
            <img
              src={require("./../assets/icons/dark.svg").default}
              alt="icon"
            />
          </button>
          <button className="right-button user" onClick={mOnClickButton}>
            <img src={require("../assets/icons/user.svg").default} alt="icon" />
          </button>
        </section>
      </section>

      <section className={`header-navBar ${btn_navBar ? "btn_navBar" : ""}`}>
        <nav className="cmp--navigation--bar">
          <ul>
            <li onClick={() => {setBtn_navBar(false)}}>
              <a className="redirection" href="#iCarousel">Carousel</a>
            </li>
            <li onClick={() => {setBtn_navBar(false)}}>
              <a className="redirection" href="#iContent">Contents</a>
            </li>
            <li onClick={() => {setBtn_navBar(false)}}>
              <a className="redirection" href="#iQuestions">Questions</a>
            </li>
            <li onClick={() => {setBtn_navBar(false)}}>
              <a className="redirection" href="#iAboutUs">About Us</a>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
};

export default Header;
 