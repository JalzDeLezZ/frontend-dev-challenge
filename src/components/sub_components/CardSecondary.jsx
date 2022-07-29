import React from 'react'
import './styles/CardSecondary.scss'

const CardSecondary = (props) => {
  return (
    <section className='component-card_secondary'>
        <figure className='c-secondary--figure'>
            <img className='figure--image' src={props.image} alt="" />
        </figure>
        <article className='c-secondary--article'>
            <h5>{props.tittle}</h5>
        </article>
    </section>
  )
}

export default CardSecondary