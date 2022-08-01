import React, { useEffect, useRef, useState } from "react";
import "./styles/Questions.scss";
const Questions = () => {
  const [category, setCategory] = useState("");

  useEffect(() => {
    const questions = document.querySelectorAll(
      ".preguntas .contenedor-pregunta"
    );

    questions.forEach((question) => {
      question.addEventListener("click", (e) => {
        e.currentTarget.classList.toggle("activa");

        const resoult = question.querySelector(".respuesta");
        const height = resoult.scrollHeight;

        if (!resoult.style.maxHeight) {
          resoult.style.maxHeight = `${height}px`;
        } else {
          resoult.style.maxHeight = null;
        }

        questions.forEach((e) => {
          if (question !== e) {
            e.classList.remove("activa");
            e.querySelector(".respuesta").style.maxHeight = null;
          }
        });
      });
    });
  }, []);

  return (
    <section className="component-question">
      <h1 className="tittle">Preguntas Frecuentes</h1>
      <Categories category={category} setCategory={setCategory} />

      <section className="preguntas">
        {/* Preguntas Metodos de pago */}
        <article
          className="contenedor-preguntas activo"
          data-categoria="metodos-pago"
        >
          <div className="contenedor-pregunta">
            <h5 className="pregunta">
              ¿Que metodos de pago disponibles tienen?{" "}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 9h-9v-9h-6v9h-9v6h9v9h6v-9h9z"/></svg>
            </h5>
            <p className="respuesta">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem
              ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum
              ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum
              ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum
              laborum.
            </p>
          </div>
          <div className="contenedor-pregunta">
            <h5 className="pregunta">
              ¿Tienen plazo de pago?{" "}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 9h-9v-9h-6v9h-9v6h9v9h6v-9h9z"/></svg>
            </h5>
            <p className="respuesta">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatum laborum porro voluptates, sequi aliquam mollitia!
              Nostrum eius iure sapiente, voluptates.
            </p>
          </div>
        </article>
        {/* Preguntas Entregas */}
        <article className="contenedor-preguntas" data-categoria="entregas">
          <div className="contenedor-pregunta">
            <h5 className="pregunta">
              ¿En que ciudades están disponibles las citas de consultoría?{" "}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 9h-9v-9h-6v9h-9v6h9v9h6v-9h9z"/></svg>
            </h5>
            <p className="respuesta">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatum laborum porro voluptates, sequi aliquam mollitia!
              Nostrum eius iure sapiente, voluptates soluta adipisci,
              perferendis.
            </p>
          </div>
          <div className="contenedor-pregunta">
            <h5 className="pregunta">
              ¿Están abalados por la OMS?{" "}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 9h-9v-9h-6v9h-9v6h9v9h6v-9h9z"/></svg>
            </h5>
            <p className="respuesta">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatum laborum parom.
            </p>
          </div>
        </article>
        {/* Preguntas Seguridad */}
        <article className="contenedor-preguntas" data-categoria="seguridad">
          <div className="contenedor-pregunta">
            <h5 className="pregunta">
              ¿Como puedo saber si son confiables?{" "}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 9h-9v-9h-6v9h-9v6h9v9h6v-9h9z"/></svg>
            </h5>
            <p className="respuesta">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatum laborum porro voluptates, sequi aliquam mollitia!
              Nostrum eius iure sapiente.
            </p>
          </div>
          <div className="contenedor-pregunta">
            <h5 className="pregunta">
              ¿Que pasa con mis datos personales?{" "}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 9h-9v-9h-6v9h-9v6h9v9h6v-9h9z"/></svg>
            </h5>
            <p className="respuesta">
              Lorem ipsum, dolor sit amet consectetur adipisicing
              elit.Voluptatum laborum porro voluptates, sequi aliquam
              mollitia!Nostrum eius iure sapiente, voluptates soluta.
            </p>
          </div>
        </article>
        {/* Preguntas Cuenta */}
        <article className="contenedor-preguntas" data-categoria="cuenta">
          <div className="contenedor-pregunta">
            <h5 className="pregunta">
              ¿Como puedo acceder a mis pedidos?{" "}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 9h-9v-9h-6v9h-9v6h9v9h6v-9h9z"/></svg>
            </h5>
            <p className="respuesta">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatum laborum porro voluptates, sequi aliquam mollitia!
              Nostrum eius iure sapiente, voluptates soluta adipisci,
              perferendis voluptatibus eligendi vel saepe harum. Consectetur,
              doloribus.adipisicing elit.
            </p>
          </div>
          <div className="contenedor-pregunta">
            <h5 className="pregunta">
              ¿Como puedo cambiar mi contraseña?{" "}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 9h-9v-9h-6v9h-9v6h9v9h6v-9h9z"/></svg>
            </h5>
            <p className="respuesta">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatum laborum porro voluptates, sequi aliquam mollitia!
              Nostrum eius iure sapiente, voluptates soluta adipisci,
              perferendis voluptatibus eligendi vel saepe harum. Consectetur,
              doloribus.adipisicing elit.
            </p>
          </div>
        </article>
      </section>
    </section>
  );
};

const Categories = ({ category, setCategory }) => {
  const iCategory = useRef(null);

  const handleClick = (e) => {
    setCategory(e.currentTarget.dataset.categoria);
    iCategory.current.childNodes.forEach((item) => {
      item.classList.remove("activa");
    });
    e.currentTarget.classList.toggle("activa");

    const contenedorPreguntas = document.querySelectorAll(
      ".contenedor-preguntas"
    );

    contenedorPreguntas.forEach((item) => {
      if (item.dataset.categoria === e.currentTarget.dataset.categoria) {
        item.classList.add("activo");
      } else {
        item.classList.remove("activo");
      }
    });
  };

  return (
    <section className="categorias" ref={iCategory}>
      <figure
        className="categoria activa"
        data-categoria="metodos-pago"
        onClick={handleClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fillRule="evenodd"
          clipRule="evenodd"
        >
          <path d="M4.908 17.137c1.504-2.31 1.779-4.45 1.681-5.688-6.132.101-5.696-6.449-1.39-6.449 1.83 0 3.801 1.338 3.801 4.275 0 2.724-1.412 5.845-4.092 7.862zm13 0c1.504-2.31 1.779-4.45 1.681-5.688-6.132.101-5.696-6.449-1.39-6.449 1.83 0 3.801 1.338 3.801 4.275 0 2.724-1.412 5.845-4.092 7.862zm-16.908 3.863c6.108-1.206 10-6.584 10-11.725 0-3.97-2.786-6.275-5.801-6.275-2.615 0-5.199 1.797-5.199 4.979 0 2.601 1.905 4.757 4.396 5.149-.217 2.004-2.165 4.911-4.38 5.746l.984 2.126zm13 0c6.108-1.206 10-6.584 10-11.725 0-3.97-2.786-6.275-5.801-6.275-2.615 0-5.199 1.797-5.199 4.979 0 2.601 1.905 4.757 4.396 5.149-.217 2.004-2.165 4.911-4.38 5.746l.984 2.126z" />
        </svg>
        <h4>Nosotros</h4>
      </figure>
      <figure
        className="categoria"
        onClick={handleClick}
        data-categoria="entregas"
      >
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
        >
          <path d="M7 24h-5v-9h5v1.735c.638-.198 1.322-.495 1.765-.689.642-.28 1.259-.417 1.887-.417 1.214 0 2.205.499 4.303 1.205.64.214 1.076.716 1.175 1.306 1.124-.863 2.92-2.257 2.937-2.27.357-.284.773-.434 1.2-.434.952 0 1.751.763 1.751 1.708 0 .49-.219.977-.627 1.356-1.378 1.28-2.445 2.233-3.387 3.074-.56.501-1.066.952-1.548 1.393-.749.687-1.518 1.006-2.421 1.006-.405 0-.832-.065-1.308-.2-2.773-.783-4.484-1.036-5.727-1.105v1.332zm-1-8h-3v7h3v-7zm1 5.664c2.092.118 4.405.696 5.999 1.147.817.231 1.761.354 2.782-.581 1.279-1.172 2.722-2.413 4.929-4.463.824-.765-.178-1.783-1.022-1.113 0 0-2.961 2.299-3.689 2.843-.379.285-.695.519-1.148.519-.107 0-.223-.013-.349-.042-.655-.151-1.883-.425-2.755-.701-.575-.183-.371-.993.268-.858.447.093 1.594.35 2.201.52 1.017.281 1.276-.867.422-1.152-.562-.19-.537-.198-1.889-.665-1.301-.451-2.214-.753-3.585-.156-.639.278-1.432.616-2.164.814v3.888zm3.79-19.913l3.21-1.751 7 3.86v7.677l-7 3.735-7-3.735v-7.719l3.784-2.064.002-.005.004.002zm2.71 6.015l-5.5-2.864v6.035l5.5 2.935v-6.106zm1 .001v6.105l5.5-2.935v-6l-5.5 2.83zm1.77-2.035l-5.47-2.848-2.202 1.202 5.404 2.813 2.268-1.167zm-4.412-3.425l5.501 2.864 2.042-1.051-5.404-2.979-2.139 1.166z" />
        </svg>
        <h4>Citas</h4>
      </figure>
      <figure
        className="categoria"
        onClick={handleClick}
        data-categoria="seguridad"
      >
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
        >
          <path d="M12 0c-3.371 2.866-5.484 3-9 3v11.535c0 4.603 3.203 5.804 9 9.465 5.797-3.661 9-4.862 9-9.465v-11.535c-3.516 0-5.629-.134-9-3zm0 1.292c2.942 2.31 5.12 2.655 8 2.701v10.542c0 3.891-2.638 4.943-8 8.284-5.375-3.35-8-4.414-8-8.284v-10.542c2.88-.046 5.058-.391 8-2.701zm5 7.739l-5.992 6.623-3.672-3.931.701-.683 3.008 3.184 5.227-5.878.728.685z" />
        </svg>
        <h4>Seguridad</h4>
      </figure>
      <figure
        className="categoria"
        onClick={handleClick}
        data-categoria="cuenta"
      >
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
        >
          <path d="M9.484 15.696l-.711-.696-2.552 2.607-1.539-1.452-.698.709 2.25 2.136 3.25-3.304zm0-5l-.711-.696-2.552 2.607-1.539-1.452-.698.709 2.25 2.136 3.25-3.304zm0-5l-.711-.696-2.552 2.607-1.539-1.452-.698.709 2.25 2.136 3.25-3.304zm10.516 11.304h-8v1h8v-1zm0-5h-8v1h8v-1zm0-5h-8v1h8v-1zm4-5h-24v20h24v-20zm-1 19h-22v-18h22v18z" />
        </svg>
        <h4>Cuenta</h4>
      </figure>
    </section>
  );
};

export default Questions;
