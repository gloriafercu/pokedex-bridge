import React, { Component } from 'react';
import './SearchForm.css';

export class SearchForm extends Component {
  render() {
    const { changeInput } = this.props;
    return (
      <form className="search__form">
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