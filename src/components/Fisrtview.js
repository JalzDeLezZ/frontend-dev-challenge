import React, { useEffect, useState } from "react";
import "./styles/Firstview.scss";
const Fisrtview = () => {
  const autoPlay = true;
  const images = ["oceann.jpg", "diet.jpg", "familyy.jpg"];

  const [selectedIndex, setselectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [loaded, setLoaded] = useState(false);

  const selectNewImage = (number, images, next = true) => {
    setLoaded(false);
    setTimeout(() => {
      const condition = next ? number < images.length - 1 : number > 0;
      const nextIndex = next
        ? condition
          ? number + 1
          : 0
        : condition
        ? number - 1
        : images.length - 1;
      setSelectedImage(images[nextIndex]);
      setselectedIndex(nextIndex);
    }, 500);
  };

  const previous = () => {
    selectNewImage(selectedIndex, images, false);
  };

  const next = () => {
    selectNewImage(selectedIndex, images);
  };

  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(() => {
        selectNewImage(selectedIndex, images);
      }, 3000);
      return () => clearInterval(interval);
    }
  });

  return (
    <section id="iCarousel" className="component-Firstview">
      <figure className="firstview--background">
        <img
          src={require("../assets/images/mask.jpg")}
          alt="Mask"
          className="main--mask"
        />
      </figure>
      <div className="firstview-main">
        <figure className="box--figure">
          <img
            src={require(`../assets/images/carousel/${selectedImage}`)}
            alt="call-center"
            className={`img--carousel ${loaded && "loaded"}`}
            onLoad={() => setLoaded(true)}
          />
          <article className="paragraph">
            <h1>
              Su viaje de salud emocional
              {/* <span className="cmp-text--secondary"> </span> */}
              empieza aquí
            </h1>
            <h2>Conoce nuestros profesionales con licencia</h2>
            <p>
              Todos se somenten a un proceso seguro de verificación y
              acreditación, ademas de adherirse a estrictos códigos de ética y
              confidencialidad.
            </p>
          </article>
          <div className="containerControls">
            <button onClick={previous}>{"<"}</button>
            <button onClick={next}>{">"}</button>
          </div>
        </figure>
      </div>

    </section>
  );
};

export default Fisrtview;

/* 

const Cover = () => {
  return (
    <div className="firstview-main">
      <figure className="box--figure">
        <img
          src={require("../assets/images/carousel/acampament.jpg")}
          alt="call-center"
        />
        <article className="paragraph">
          <h1>
            Su viaje de
            <span className="cmp-text--secondary"> salud emocional</span>{" "}
            empieza aquí
          </h1>
          <h2>Conoce nuestros profesionales con licencia</h2>
          <p>
            Todos se somenten a un proceso seguro de verificación y
            acreditación, ademas de adherirse a estrictos códigos de ética y
            confidencialidad.
          </p>
        </article>
      </figure>
    </div>
  );
};

*/
