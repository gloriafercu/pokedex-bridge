import React, { Component } from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import './PokemonCard.css';

export class PokemonCard extends Component {
  static propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    sprites: PropTypes.object,
    types: PropTypes.array
  };

  render() {
    const { name, id, sprites, types } = this.props.pokemon;
    const style = {
      backgroundImage: `url(${sprites.front_default})`
    }

    return (
      <Link className="link__pokemon__card" to={`/details/${id}`}>
        <div className="card__content">
          <div className="pokemon__title">
            <h2 className="pokemon__name">{name}</h2>
            <p className="pokemon__id">#{id.toLocaleString('en-US', { minimumIntegerDigits: 2 })}</p>
          </div>
          <div className="pokemon__img" style={style}></div>
          <div className="pokemon__types">
            {types.map((elem, i) =>
              <span key={i} className={`type ${elem.type.name.toLowerCase()}`}>{elem.type.name}</span>)
            }
          </div>
        </div>
      </Link>
    );
  }
}
