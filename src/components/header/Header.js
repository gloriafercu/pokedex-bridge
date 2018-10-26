import React from 'react';
import './Header.css';

export const Header = ({ children }) => {
  return (
    <header className="header__container">
      <h1 className="header__title">{children}</h1>
    </header>
  );
}