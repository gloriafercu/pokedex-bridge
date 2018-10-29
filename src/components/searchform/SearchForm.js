import React, { Component } from 'react';
import Lens from './../../images/lens.svg';
import './SearchForm.css';

export class SearchForm extends Component {
  render() {
    const { changeInput } = this.props;
    return (
      <form className="search__form">
        <img className="lens" src={Lens} alt="pokédex" />
        <input
          type="text"
          className="input__search"
          placeholder="Search your favourite pokémon..."
          onChange={changeInput}
        />
      </form>
    );
  }
}