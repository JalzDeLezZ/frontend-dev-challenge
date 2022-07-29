import './styles/CardFirst.scss'

const CardFirst = (props) => {
  return (
    <section className="component-card">
      <figure className="card--figure">
        <img
          src={props.image}
          alt={props.alt}
          className="card-image--background"
        />
        <ol className="figure-options">
          <li>
            <button type="buttom">
              <img
                src={require("../../assets/icons/add-fav.svg").default}
                alt={props.icon}
              />
            </button>
          </li>
          <li>
            <a href="#!">
              <img
                src={require("../../assets/icons/MyShare.svg").default}
                alt={props.icon}
              />
            </a>
          </li>
        </ol>
      </figure>
      <article className="card--bottom">
        <figure className="card-category">
          <img
            src={require("../../assets/icons/category.svg").default}
            alt="Category"
          />
          <p>
            Lo encuentras en
            <b> {props.category}</b>
          </p>
        </figure>
        <h3>{props.tittle}</h3>
        <p>{props.text}</p>
      </article>
    </section>
  );
};

export default CardFirst;