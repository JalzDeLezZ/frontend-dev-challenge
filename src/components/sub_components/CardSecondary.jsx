import React, { useRef } from "react";
import { MY_BTN_MAN } from "./Buttons";
import "./styles/CardSecondary.scss";

const CardSecondary = (props) => {
  const rTarget = useRef(null);

  const mValidateFunction = (e) => {
    //validate if I recieve a function from props
    if (typeof props.mFunctionOpen === "function") {
      props.mFunctionOpen(e, rTarget);
    } else {
      console.log("No function to open");
    }
  };

  return (
    <section className="component-card_secondary" ref={rTarget}>
      <header className="c-secondary--content--header">
        <figure className="c-secondary--figure">
          <img className="figure--image" src={props.image} alt="" />
          {props.isFavorite ? (
            <button
              type="buttom"
              className="button--remove"
              onClick={(e) => props.mDeleteFavs(e)}
              value={parseInt(props.id)}
            >
              <img
                src={require("../../assets/icons/subtract-fav.svg").default}
                alt={props.icon}
              />
            </button>
          ) : (
            <button
              type="buttom"
              className="button--add"
              onClick={(e) => props.pMAddFavorite(e)}
              value={parseInt(props.id)}
            >
              <img
                src={require("../../assets/icons/add-fav.svg").default}
                alt={props.icon}
              />
            </button>
          )}
        </figure>
        <article className="c-secondary--article">
          <h5>{props.tittle}</h5>
        </article>
      </header>
      <article className="c-secondary-detail">{props.text}</article>
      {
        props.detail && (
          <MY_BTN_MAN id={props.id} onClick={mValidateFunction}/>
        )
      }
    </section>
  );
};

export default CardSecondary;
