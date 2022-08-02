import React from "react";
import "./styles/Newsletter.scss";

const Newsletter = () => {
  return (
    <section className="component-newsletter">
      <img
        className="newslatter--img
        img"
        src={require("../assets/images/ilustration-news.svg").default}
        alt="Newsletter"
      />
      <article className="newslatter--article">
        <h2>Suscríbete a nuestro boletín de noticias</h2>
        <p>
          Inspírate semanalmente con las novedades, los artículos más leídos, y
          sugerencias elegidad especialmente para tí.
        </p>
      </article>
      
      <form className="newslatter--form" onSubmit={(e) => e.preventDefault()}>
        <div className="cmp--input-group subscribe">
          <input type="search" placeholder="Ingrese su correo" />
          <button type="submit">Suscribete</button>
        </div>

        <div className="cmp--checkbox terms">
          <label className="container">
            <input defaultChecked="checked" type="checkbox" />
            <div className="checkmark" />
          </label>
          <span>Acepto los términos y condiciones</span>
        </div>
      </form>
    </section>
  );
};

export default Newsletter;
