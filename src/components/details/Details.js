import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Details.css';

export class Details extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.object,
      isExact: PropTypes.bool,
      path: PropTypes.string,
      url: PropTypes.string
    })
  };

  render() {
    const poke = this.props.pokemons[0];

    if (poke == undefined) {
      return (
        <div className="details__container error-msg">Sorry, we are having trouble showing pokemon's details, come back to the list</div>
      )
    }

    return (
      <section className="pokemon__details__container">
        <div className="modal__background">
          <div className="modal__card">
            <div className="cover">
              <Link className="link__button--close" to='/'>
                <button className="button--close">
                  <span className="button__text">Back</span>
                </button>
              </Link>
              <div className="picture">
                <img className="front_shiny" src={poke.sprites.front_shiny} alt={poke.name} />
              </div>
            </div>
            <div className="info__details">
              <p className="pokemon__name__details">{poke.name}</p>
              <div className="info__card">
                <div className="pokemon__abilities">
                  <p className="abilities__title">Abilities</p>
                  {poke.abilities.map((elem, i) =>
                    <span className="ability" key={i}>{elem.ability.name} </span>
                  )}
                </div>
                <div className="pokemon__weight">
                  <span className="weight__title">Weight: </span>
                  <span className="weight__detail">{poke.weight / 10} kg</span>
                </div>
                <div className="pokemon__height">
                  <span className="height__title">Height: </span>
                  <span className="height__detail">{poke.height / 10} m</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}