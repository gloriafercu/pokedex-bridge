import React from 'react';
import Pokeball from './../../images/pokeball.svg';
import './Header.css';

export const Header = ({ children }) => {
  return (
    <header className="header__container">
      <h1 className="header__title">{children}</h1>
      <img className="pokeball" src={Pokeball} alt="pokédex" />
    </header>
  );
}