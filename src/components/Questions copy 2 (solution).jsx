import React, { useEffect, useRef, useState } from "react";
import "./styles/Questions.scss";
const Questions = () => {
  const [category, setCategory] = useState("");

  const [question, setQuestion] = useState("");

  const iAsk = useRef(null);
/* 
  useEffect(() => {
    // add className to the element to match the category name
    console.log(iAsk.current, "AAAAAAAAAAAAAAAAAAAAAAAAAAX");
    // iAsk.current.classList.add(category);
    // iAsk.current.childNodes.forEach((element) => {
    //   element.classList.add(category);
    // });
    //if the element dataset.category is equal to the category name, add className to the element
    // if (iAsk.current.dataset.category === category) {
    //   iAsk.current.classList.add(category);
    // } else {
    //   iAsk.current.classList.remove(category);
    // }
    // console.log(iAsk.current.childNodes[0].classList.remove('activo'), "ccccccccccccc");
    iAsk.current.childNodes.forEach((element) => {
      console.log("object", element);
      if (element.dataset.categoria === category) {
        console.log("match ----------------", element);
        element.classList.add('activo');
      } else {
        element.classList.remove('activo');
      }
      console.log(element.dataset.categoria);
      console.log(category);
    })
  }, [category]); */

  return (
    <section className="component-question">
      <h1 className="title">Preguntas Frecuentes</h1>
      <Categories category={category} setCategory={setCategory} />

      <section className="preguntas" ref={iAsk}>
        {/* Preguntas Metodos de pago */}
        <article
          className="contenedor-preguntas activo"
          data-categoria="metodos-pago"
        >
          <div className="contenedor-pregunta">
            <p className="pregunta">
              ¿Que metodos de pago disponibles tienen?{" "}
              <img
                src={require("../assets/icons/suma.svg").default}
                alt="Abrir Respuesta"
              />
            </p>
            <p className="respuesta">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem
              ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum
              laborum porro voluptates, sequi aliquam mollitia! Nostrum eius
              iure sapiente, voluptates soluta adipisci, perferendis
              voluptatibus eligendi vel saepe harum. Consectetur,
              doloribus.adipisicing elit.
            </p>
          </div>
          <div className="contenedor-pregunta">
            <p className="pregunta">
              ¿Tienen plazo de pago?{" "}
              <img
                src={require("../assets/icons/suma.svg").default}
                alt="Abrir Respuesta"
              />
            </p>
            <p className="respuesta">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatum laborum porro voluptates, sequi aliquam mollitia!
              Nostrum eius iure sapiente, voluptates soluta adipisci,
              perferendis voluptatibus eligendi vel saepe harum. Consectetur,
              doloribus.adipisicing elit. Voluptatum laborum porro voluptates,
              sequi aliquam mollitia! Nostrum eius iure sapiente, voluptates
              soluta adipisci, perferendis voluptatibus eligendi vel saepe
              harum. Consectetur, doloribus.
            </p>
          </div>
        </article>
        {/* Preguntas Entregas */}
        <article className="contenedor-preguntas" data-categoria="entregas">
          <div className="contenedor-pregunta">
            <p className="pregunta">
              ¿Tienen entregas a domicilio?{" "}
              <img
                src={require("../assets/icons/suma.svg").default}
                alt="Abrir Respuesta"
              />
            </p>
            <p className="respuesta">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatum laborum porro voluptates, sequi aliquam mollitia!
              Nostrum eius iure sapiente, voluptates soluta adipisci,
              perferendis voluptatibus eligendi vel saepe harum. Consectetur,
              doloribus.adipisicing elit. Voluptatum laborum porro voluptates,
              sequi aliquam mollitia! Nostrum eius iure sapiente, voluptates
              soluta adipisci, perferendis voluptatibus eligendi vel saepe
              harum. Consectetur, doloribus.adipisicing elit. Voluptatum laborum
              porro voluptates, sequi aliquam mollitia! Nostrum eius iure
              sapiente, voluptates soluta adipisci, perferendis voluptatibus
              eligendi vel saepe harum. Consectetur, doloribus.
            </p>
          </div>
          <div className="contenedor-pregunta">
            <p className="pregunta">
              ¿En cuanto sale el envio a mi país?{" "}
              <img
                src={require("../assets/icons/suma.svg").default}
                alt="Abrir Respuesta"
              />
            </p>
            <p className="respuesta">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatum laborum porro voluptates, sequi aliquam mollitia!
              Nostrum eius iure sapiente, voluptates soluta adipisci,
              perferendis voluptatibus eligendi vel saepe harum. Consectetur,
              doloribus.adipisicing elit. Voluptatum laborum porro voluptates,
              sequi aliquam mollitia! Nostrum eius iure sapiente, voluptates
              soluta adipisci, perferendis voluptatibus eligendi vel saepe
              harum. Consectetur, doloribus.
            </p>
          </div>
        </article>
        {/* Preguntas Seguridad */}
        <article className="contenedor-preguntas" data-categoria="seguridad">
          <div className="contenedor-pregunta">
            <p className="pregunta">
              ¿Como puedo saber si son confiables?{" "}
              <img
                src={require("../assets/icons/suma.svg").default}
                alt="Abrir Respuesta"
              />
            </p>
            <p className="respuesta">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatum laborum porro voluptates, sequi aliquam mollitia!
              Nostrum eius iure sapiente, voluptates soluta adipisci,
              perferendis voluptatibus eligendi vel saepe harum. Consectetur,
              doloribus.adipisicing elit. Voluptatum laborum porro voluptates,
              sequi aliquam mollitia! Nostrum eius iure sapiente, voluptates
              soluta adipisci, perferendis voluptatibus eligendi vel saepe
              harum. Consectetur, doloribus.adipisicing elit. Voluptatum laborum
              porro voluptates, sequi aliquam mollitia! Nostrum eius iure
              sapiente, voluptates soluta adipisci, perferendis voluptatibus
              eligendi vel saepe harum. Consectetur, doloribus.
            </p>
          </div>
          <div className="contenedor-pregunta">
            <p className="pregunta">
              ¿Que pasa con mis datos personales?{" "}
              <img
                src={require("../assets/icons/suma.svg").default}
                alt="Abrir Respuesta"
              />
            </p>
            <p className="respuesta">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatum laborum porro voluptates, sequi aliquam mollitia!
              Nostrum eius iure sapiente, voluptates soluta adipisci,
              perferendis voluptatibus eligendi vel saepe harum. Consectetur,
              doloribus.adipisicing elit. Voluptatum laborum porro voluptates,
              sequi aliquam mollitia! Nostrum eius iure sapiente, voluptates
              soluta adipisci, perferendis voluptatibus eligendi vel saepe
              harum. Consectetur, doloribus.
            </p>
          </div>
        </article>
        {/* Preguntas Cuenta */}
        <article className="contenedor-preguntas" data-categoria="cuenta">
          <div className="contenedor-pregunta">
            <p className="pregunta">
              ¿Como puedo acceder a mis pedidos?{" "}
              <img
                src={require("../assets/icons/suma.svg").default}
                alt="Abrir Respuesta"
              />
            </p>
            <p className="respuesta">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatum laborum porro voluptates, sequi aliquam mollitia!
              Nostrum eius iure sapiente, voluptates soluta adipisci,
              perferendis voluptatibus eligendi vel saepe harum. Consectetur,
              doloribus.adipisicing elit. Voluptatum laborum porro voluptates,
              sequi aliquam mollitia! Nostrum eius iure sapiente, voluptates
              soluta adipisci, perferendis voluptatibus eligendi vel saepe
              harum. Consectetur, doloribus.adipisicing elit. Voluptatum laborum
              porro voluptates, sequi aliquam mollitia! Nostrum eius iure
              sapiente, voluptates soluta adipisci, perferendis voluptatibus
              eligendi vel saepe harum. Consectetur, doloribus.
            </p>
          </div>
          <div className="contenedor-pregunta">
            <p className="pregunta">
              ¿Como puedo cambiar mi contraseña?{" "}
              <img
                src={require("../assets/icons/suma.svg").default}
                alt="Abrir Respuesta"
              />
            </p>
            <p className="respuesta">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatum laborum porro voluptates, sequi aliquam mollitia!
              Nostrum eius iure sapiente, voluptates soluta adipisci,
              perferendis voluptatibus eligendi vel saepe harum. Consectetur,
              doloribus.adipisicing elit. Voluptatum laborum porro voluptates,
              sequi aliquam mollitia! Nostrum eius iure sapiente, voluptates
              soluta adipisci, perferendis voluptatibus eligendi vel saepe
              harum. Consectetur, doloribus.
            </p>
          </div>
        </article>
      </section>
    </section>
  );
};

const Categories = ({ category, setCategory }) => {
  const iCategory = useRef(null);
  // const [category, setCategory] = useState("");

  const handleClick = (e) => {
    // iCategory.current.classList.toggle("activa");
    // console.log(e.target.dataset.categoria);
    console.log(e.currentTarget, "AAAAAAAAAAAAAAA");
    setCategory(e.currentTarget.dataset.categoria);
    //add class active to the current category
    // iCategory.current.classList.add("activa");
    // e.currentTarget.classList.add("activa");
    //clean the class active from the other categories
    iCategory.current.childNodes.forEach((item) => {
      item.classList.remove("activa");
    });
    e.currentTarget.classList.toggle("activa");
    console.log(e.target, "%%%%%%%%%%%%%%%%");

    console.log("----------------------");

    console.log(iCategory.current, "###############");

    console.log("==========================================================");

    // get all tags with class "contenedor-preguntas"

    const contenedorPreguntas = document.querySelectorAll(
      ".contenedor-preguntas"
    );

    console.log(contenedorPreguntas, "###############");

    // clean the class active from the other categories
    contenedorPreguntas.forEach((item) => {
      // item.classList.remove("activo");
      if (item.dataset.categoria === e.currentTarget.dataset.categoria) {
        item.classList.add("activo");
      } else {
        item.classList.remove("activo");
      }
    })


  };

  console.log(category, "SSSSSSSSSSS");

  return (
    <section className="categorias" ref={iCategory}>
      <figure
        className="categoria activa"
        data-categoria="metodos-pago"
        onClick={handleClick}
      >
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
        >
          <path d="M21.19 7h2.81v15h-21v-5h-2.81v-15h21v5zm1.81 1h-19v13h19v-13zm-9.5 1c3.036 0 5.5 2.464 5.5 5.5s-2.464 5.5-5.5 5.5-5.5-2.464-5.5-5.5 2.464-5.5 5.5-5.5zm0 1c2.484 0 4.5 2.016 4.5 4.5s-2.016 4.5-4.5 4.5-4.5-2.016-4.5-4.5 2.016-4.5 4.5-4.5zm.5 8h-1v-.804c-.767-.16-1.478-.689-1.478-1.704h1.022c0 .591.326.886.978.886.817 0 1.327-.915-.167-1.439-.768-.27-1.68-.676-1.68-1.693 0-.796.573-1.297 1.325-1.448v-.798h1v.806c.704.161 1.313.673 1.313 1.598h-1.018c0-.788-.727-.776-.815-.776-.55 0-.787.291-.787.622 0 .247.134.497.957.768 1.056.344 1.663.845 1.663 1.746 0 .651-.376 1.288-1.313 1.448v.788zm6.19-11v-4h-19v13h1.81v-9h17.19z" />
        </svg>
        <p>Métodos de pago</p>
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
        <p>Entregas</p>
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
        <p>Seguridad</p>
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
        <p>Cuenta</p>
      </figure>
    </section>
  );
};

export default Questions;


// Página de Preguntas Frecuentes con Filtros | HTML, CSS y Javascript
// https://youtu.be/HOezqHXVVxA
