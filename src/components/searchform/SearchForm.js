import React, { Component } from 'react';
import './SearchForm.css';

export class SearchForm extends Component {
  render() {
    const { changeInput, submitForm } = this.props;
    return (
      <form className="search__form" onSubmit={submitForm}>
        <input
          type="text"
          className="input__search"
          placeholder="Search your favourite pokémon..."
          onChange={changeInput}
        />
        <button className="button__search">Search</button>
      </form>
    );
  }
}