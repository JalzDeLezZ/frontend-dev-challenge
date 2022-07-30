import React from "react";
import { api_cards } from "../assets/data/apiCards";
import "./styles/Cards.scss";
import CardFirst from "./sub_components/CardFirst";
import CardSecondary from "./sub_components/CardSecondary";

const ContentCards = () => {
  const card_first = api_cards.sort((a, b) => a.rank - b.rank)[0];
  // const cards_tertiary = api_cards.filter((card) => card.rank === 3);

  const cards_secondary = api_cards.filter((card) => card !== card_first);

  return (
    <section className="component-content--cards">
      <section className="card--principal">
        <CardFirst {...card_first} />
      </section>
      <section className="card--thid_party cmp-scrollbar">
        {cards_secondary.map((card, i) => (
          <CardSecondary key={i} {...card} />
        ))}
      </section>
    </section>
  );
};

export { ContentCards };
