import React, { Component } from 'react';
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
    const { pokemon } = this.props;
    const { name, id, sprites, types } = pokemon;
    const style = {
      backgroundImage: `url(${sprites.front_default})`
    }

    return [
      <h2 className="pokemon__name" key={`name-${id}`}>{name}</h2>,
      <p className="pokemon__id" key={`id-${id}`}>{id}</p>,
      <div className="pokemon__img" key={`img-${id}`} style={style}></div>,
      <div className="pokemon__types" key={`types-${id}`}>
        {types.map((elem, i) =>
          <span key={i}>{elem.type.name}</span>)
        }
      </div>
    ];
  }
}
