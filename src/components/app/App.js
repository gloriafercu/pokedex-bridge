import React, { Component } from 'react';
import { Header } from '../header/Header';
import { SearchForm } from '../searchform/SearchForm';
import { PokemonList } from '../pokemonlist/PokemonList';
import { Footer } from '../footer/Footer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonList: [],
      inputSearch: ''
    }
  }

  _handleOnChange = (e) => {
    const inputValue = e.target.value;
    this.setState({
      inputSearch: inputValue.toLowerCase()
    });
  }

  componentDidMount() {
    this._fetchPokemonsToApi();
  }

  _fetchPokemonsToApi() {
    const NUMBER_POKEMONS = 8;
    for (let i = 1; i <= NUMBER_POKEMONS; i++) {
      Promise.all([fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`).then(response => response.json())])
        .then(([pokemons]) => {
          this.setState({
            pokemonList: [...this.state.pokemonList, pokemons]
          });
        })
        .catch((error) => {
          console.error('There was an error while fetching pokemons', error);
        });
    }
  }

  _getFilteredPokemons() {
    const { pokemonList, inputSearch } = this.state;
    console.log({ pokemonList });
    const filteredPokemons = pokemonList.filter(item => item.name.toLowerCase().includes(inputSearch)).sort((a, b) => a.id - b.id);
    return (
      <PokemonList
        pokemons={filteredPokemons}
      />
    );
  }

  render() {
    return [
      <Header key="header" > POKEDEX</Header>,
      <main key="main" className="main__container">
        <SearchForm
          changeInput={this._handleOnChange}
        />
        {this._getFilteredPokemons()}
      </main>,
      <Footer key="footer">Pokédex site by Gloria Fernández, with help from PokéApi</Footer>
    ];
  }
}

export default App;
