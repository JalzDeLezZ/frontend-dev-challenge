import React from "react";
import { api_cards } from "../assets/data/apiCards";
import "./styles/Cards.scss";
import CardFirst from "./sub_components/CardFirst";
import CardSecondary from "./sub_components/CardSecondary";
import { useLocalStorage } from "../context/hooks";

const ContentCards = () => {
  const [favorites, setFavorites] = useLocalStorage("favorites", []);

  const card_first = api_cards.sort((a, b) => a.rank - b.rank)[0];
  // const cards_tertiary = api_cards.filter((card) => card.rank === 3);

  const cards_secondary = api_cards.filter((card) => card !== card_first);

  const mAddFavorite = (event) => {
    console.log("Add favorite");
    // const tag = event.target;
    const card_id = event.currentTarget.value;
    // console.log(card_id, tag);
    const card_favorite = api_cards.find(
      (card) => card.id === parseInt(card_id)
    );
    // console.log(card_favorite);
    card_favorite.isFavorite = true;
    setFavorites([...favorites, card_favorite]);
  };

  const mRemoveFavorite = (event) => {
    console.log("first - Remove favorite");
    const card_id = event.currentTarget.value;
    const card_favorite = api_cards.find(
      (card) => card.id === parseInt(card_id)
    );
    card_favorite.isFavorite = false;
    setFavorites(favorites.filter((card) => card.id !== card_favorite.id));
  };

  return (
    <section className="component-content--cards">
      <section className="card--principal">
        <CardFirst
          {...card_first}
          pMAddFavorite={mAddFavorite}
          pMRemoveFavorite={mRemoveFavorite}
        />
      </section>
      <section className="card--thid_party cmp-scrollbar">
        {cards_secondary.map((card, i) => (
          <CardSecondary
            key={i}
            {...card}
            pMAddFavorite={mAddFavorite}
            pMRemoveFavorite={mRemoveFavorite}
          />
        ))}
      </section>
    </section>
  );
};

export { ContentCards };
