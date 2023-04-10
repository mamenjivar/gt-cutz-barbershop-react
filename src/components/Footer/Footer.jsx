import React from 'react';
// styles
import classes from './Footer.module.scss';

const Footer = () => {
  const copyRightDate = new Date().getFullYear();
  return (
    <footer className={classes.footerSection}>
      <p>&copy; {copyRightDate} GT Cutz all rights reserved</p>
    </footer>
  );
};

export default Footer;
