import React from 'react';

export const Footer = ({ children }) => {
  return (
    <footer className="footer__container">
      <p className="footer__title">{children}</p>
    </footer>
  );
}