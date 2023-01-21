import React from 'react';
import logo from '../../img/gt-cutz-cutout.PNG'

// styling
import styles from './Banner.module.scss';

/**
 * The landing page banner for barbershop
 * @returns 
 */
const Banner = () => {
 return (
  <header className={`${styles.backgroundImage} ${styles.backgroundText} ${styles.backgroundColumns}`}>
    <img src={logo} alt="logo"/>
  </header>
 );
};

export default Banner;
