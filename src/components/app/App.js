import React, { Component } from 'react';
import { Header } from './../header/Header';
import { Main } from './../main/Main';
import { Footer } from './../footer/Footer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonsList: []
    }
  }

  _fetchPokemonsToApi() {
    const NUMBER_POKEMONS = 5;
    for (let i = 1; i <= NUMBER_POKEMONS; i++) {
      Promise.all([fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`).then(response => response.json())])
        .then(([pokemons]) => {
          this.setState({
            pokemonsList: [...this.state.pokemonsList, pokemons]
          });
        });
    }
  }

  componentDidMount() {
    this._fetchPokemonsToApi();
  }

  // getPokemons() {
  //   const pokemonIds = 5;
  //   let pokemonList = this.state.pokemons;
  //   for (let i = 1; i <= pokemonIds; i++) {
  //     fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
  //       .then(response => response.json())
  //       .then(data => {
  //         pokemonList.push(data);
  //         this.setState({
  //           pokemons: pokemonList
  //         });
  //       });
  //   }
  // }

  render() {
    console.log('Lista de pokemons tras el fetch: ', this.state.pokemonsList);
    return (
      <div className="app__container">
        <Header>Soy un Header</Header>
        <Main />
        <Footer>By Gloria</Footer>
      </div>
    );
  }
}

export default App;
