import React from 'react';
import './Footer.css';

export const Footer = ({ children }) => {
  return (
    <footer className="footer__container">
      <p className="footer__title">{children}</p>
    </footer>
  );
}