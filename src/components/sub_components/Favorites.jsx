import React, { useContext, useEffect, useRef, useState } from "react";
import { useLocalStorage } from "../../context/hooks";
import CardSecondary from "./CardSecondary.jsx";
import "./styles/Favorites.scss";
import { AllContext } from "../../context/store.js";

const Favorites = () => {
  const [favorites, setFavorites] = useLocalStorage("favorites", []);
  const [cards, setCards] = useLocalStorage("cards", []);

  const rSection = useRef(null);

  const {
    state: { cards: stateCards },
  } = useContext(AllContext);

  const handleClick = (event, ref) => {
    // console.log("click", event, "=========", ref);

    // if the target ref has the class "active"
    if (ref.current.classList.contains("active")) {
      // remove the class "active"
      ref.current.classList.remove("active");
    }
    // else add the class "active"
    else {
      // remove all classes "activee" from the children tags
      rSection.current.childNodes.forEach((child) => {
        child.classList.remove("active");
      });

      // console.log("ref.current", ref.current);
      ref.current.classList.toggle("active"); //success
      // event.currentTarget.classList.toggle("active"); // success
    }
  };

  const aFavorites = JSON.parse(localStorage.getItem("favorites"));

  const mRemoveFavorite = (event) => {
    const card_id = event.currentTarget.value;
    const newFavorites = favorites.filter(
      (card) => card.id !== parseInt(card_id)
    );
    console.log("newFavorites", newFavorites);
    setFavorites(newFavorites);
    const newCards = cards.map((card) => {
      if (card.id === parseInt(card_id)) {
        card.isFavorite = false;
      }
      return card;
    });
    setCards(newCards);

    //reload the page
    // window.location.reload();
  };

  return (
    <section className="component-favorites" ref={rSection}>
      {aFavorites.map((item) => {
        return (
          <CardSecondary
            id={item.id}
            key={item.id}
            image={item.image}
            tittle={item.tittle}
            text={item.text}
            isFavorite={item.isFavorite}
            mFunctionOpen={handleClick}
            mDeleteFavs={mRemoveFavorite}
          />
        );
      })}
    </section>
  );
};

export default Favorites;
