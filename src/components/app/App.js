import React, { Component } from 'react';
import { Header } from '../header/Header';
import { SearchForm } from '../searchform/SearchForm';
import { Spinner } from '../spinner/Spinner';
import { PokemonList } from '../pokemonlist/PokemonList';
import { Details } from '../details/Details';
import { Footer } from '../footer/Footer';
import { NotFound } from '../notfound/NotFound';
import { Switch, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonList: [],
      inputSearch: '',
      loading: true
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
    const NUMBER_POKEMONS = 50;
    for (let i = 1; i <= NUMBER_POKEMONS; i++) {
      Promise.all([
        fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
          .then(response => response.json()),
        fetch(`https://pokeapi.co/api/v2/pokemon-species/${i}/`)
          .then(response => response.json())
          .then(evolution => evolution.evolves_from_species)
      ])
        .then(([pokemons, pokemonSpecie]) => {
          if (pokemonSpecie != null) {
            pokemons.evolutionName = pokemonSpecie.name;
          }
          const delayMiliseconds = 4000;
          setTimeout(() => {
            this.setState({
              pokemonList: [...this.state.pokemonList, pokemons],
              loading: false
            })
          }, delayMiliseconds);
        })
        .catch((error) => {
          console.error('There was an error while fetching pokemons', error);
        });
    }
  }

  _getFilteredPokemons() {
    const { pokemonList, inputSearch } = this.state;
    const filteredPokemons = pokemonList.filter(item => item.name.toLowerCase().includes(inputSearch)).sort((a, b) => a.id - b.id);
    if (filteredPokemons.length === 0) {
      return (
        <p className="not__results">Sorry! <span className="emoticon" role="img" aria-label="sad"> 😟  </span> Results not found!</p>
      );
    }

    return (
      <Switch>
        <Route exact path="/" render={() =>
          <PokemonList pokemons={filteredPokemons} />
        } />
        <Route path="/details/:id" render={(props) =>
          <Details pokemons={filteredPokemons.filter(poke => poke.id == props.match.params.id)} />
        } />
        <Route component={NotFound} />
      </Switch>
    );
  }

  render() {
    const { loading } = this.state;

    return (
      <div className="app__container">
        <Header>Pokédex</Header>
        <main className="main__container">
          <SearchForm
            changeInput={this._handleOnChange}
          />

          {loading ? <Spinner /> : this._getFilteredPokemons()}

        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
