import React from "react";
import "./styles/Footer.scss";
import { api_socialMedia } from "../assets/data/apiSocialMedia.js";
import { api_otherWebSites } from "../assets/data/apiWebSites";

const Footer = () => {
  return (
    <footer className="component-footer">
      <section className="footer--firstSection">
        <section className="firstSection-box--one">
          <img
            src={require("../assets/images/flower.svg").default}
            alt="Flower decoration"
            className="box-one-logo"
          />
          <div className="box_one--subBoxA">
            <h4 className="footer-text">
              <span className="footer-text-color-1">
                Mejor con Salud
                <span className="footer-text-color-2">
                  {" "}
                  está disponible en:
                </span>
              </span>
            </h4>

            <article className="footer-languages">
              <ul className="footer-language-list">
                <li>
                  <a href="#Français">Français</a>
                </li>
                <li>
                  <a href="#English">English</a>
                </li>
                <li>
                  <a href="#Español">Español</a>
                </li>
                <li>
                  <a href="#Portuges">Portuges</a>
                </li>
                <li>
                  <a href="#中文">中文</a>
                </li>
              </ul>
            </article>

            <figure className="footer-download-app">
              <img
                src={require("../assets/images/App-Store.svg").default}
                alt="Dowload on the App Store"
                className="appStore"
              />
              <img
                src={require("../assets/images/GooglePlayStore.svg").default}
                alt="Dowload on the App Store"
                className="playStore"
              />
            </figure>
          </div>
        </section>

        <section className="footer-box--two">
          <article className="footer-externalLink">
            <h5>Sigenos en</h5>
            <ul>
              {api_socialMedia.map((e) => (
                <li key={e.id}>
                  <a href={e.url} target="_blank" rel="noopener noreferrer">
                    <img src={e.icon} alt={e.name} />
                  </a>
                </li>
              ))}
            </ul>
          </article>

          <article className="footer-externalLink">
            <h5 className="cmp-underline">Servicios</h5>
            <ul>
              <li>Cursos</li>
              <li>Consultas</li>
              <li>Tratamientos</li>
            </ul>
          </article>

          <article className="footer-externalLink">
            <h5>Otros Websites</h5>
            <ul>
              {api_otherWebSites.map((e) => (
                <li key={e.id}>
                  <a href={e.url}>
                    <img src={e.icon} alt={e.name} />
                  </a>
                </li>
              ))}
            </ul>
          </article>
        </section>

        <span className="line-separation" />

        <section className="footer-box--three">
          <article className="footer-generalInformation">
            <img src={require("../assets/icons/Loog.svg").default} alt="Logo" />
            <div className="genealInformation--paragraph">
              <h5>Información General</h5>
              <p>
                La Mente es Maravillosa is a property of Grupo MContigo© 2012 -
                2020. All rights reserved.
                <br /> <br />
                Los contenidos de esta publicación se redactan solo con fines
                informativos. En ningún momento pueden servir para facilitar
                diagnósticos o sustituir la labor de un profesional. Le
                recomendamos que contacte con su especialista de confianza.
              </p>
            </div>
          </article>

          <span className="line-separation line-separation--hidden" />

          <figure className="footer-certification">
            <img
              src={require("../assets/images/certification.svg").default}
              alt=""
            />
            <p>
              Esta página cumple con los estándares de calidad informativa
              HONCode.
              <br />
              <br />
              <a href="#!">
                <u>Compruébelo aquí.</u>
              </a>
            </p>
          </figure>
        </section>

        <span className="line-separation" />

        <ol className="footer-legalInformation">
          <li>
            <a href="#!">Política de cookies</a>
          </li>
          <li>
            <a href="#!">Política de privacidad</a>
          </li>
          <li>
            <a href="#!">Terminos y Condiciones</a>
          </li>
          <li>
            <a href="#!">Clausula Informativa de Consentimiento</a>
          </li>
        </ol>
      </section>
    </footer>
  );
};

export default Footer;
