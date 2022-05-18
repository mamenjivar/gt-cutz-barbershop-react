import logo from '../../img/IMG-8890.PNG';

import styles from './Banner.module.scss';

const Banner = () => {
 return (
  <header className={`${styles.backgroundImage} ${styles.backgroundText} ${styles.backgroundColumns}`}>
    <img src={logo} alt="logo"/>
  </header>
 );
};

export default Banner;
