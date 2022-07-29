import React from "react";
import { api_cards } from "../assets/data/apiCards";
import "./styles/Cards.scss";
import CardFirst from "./sub_components/CardFirst";
import CardSecondary from "./sub_components/CardSecondary";

const ContentCards = () => {
  const card = api_cards.sort((a, b) => a.rank - b.rank)[0];
  const cards_tertiary = api_cards.filter((card) => card.rank === 3);

  return (
    <section className="component-content--cards">
      <div className="cards__principal-thid_party">
        <section className="card--principal">
          <CardFirst {...card} />
        </section>
        <section className="card--thid_party">
          {cards_tertiary.map((card, i) => (
            <CardSecondary key={i} {...card} />
          ))}
        </section>
      </div>
    </section>
  );
};

export { ContentCards };

/* 
  // const cards_secondary = api_cards.filter((card) => card.rank === 2);

{/* <section className="card--secondary">
        {cards_secondary.map((card,i) => (
          <CardFirst key={i} {...card} />
        ))}
      </section> * /}

      ---------------------------------------

  // const cards_secondary = api_cards.sort((a, b) => a.rank - b.rank).slice(1);
   {api_cards.map((e) => (
    <Card
      key={e.id}
      tittle={e.tittle}
      text={e.text}
      img={e.image}
      category={e.category}
    />
  ))} 
*/
