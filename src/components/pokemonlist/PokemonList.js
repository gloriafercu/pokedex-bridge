import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PokemonCard } from '../pokemoncard/PokemonCard';

import './PokemonList.css';

export class PokemonList extends Component {
  static propTypes = {
    pokemons: PropTypes.array
  }

  render() {
    const { pokemons } = this.props;

    return (
      <ul className="pokemonlist__container">
        {pokemons.map((pokemon, index) =>
          <li className="card__container" key={index}>
            <PokemonCard
              pokemon={pokemon}
            />
          </li>)
        }
      </ul>
    );
  }
}
