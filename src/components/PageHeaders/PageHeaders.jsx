import React from 'react';

// styling
import styles from './PageHeaders.module.scss';

const PageHeaders = () => {
  return (
    <header
      className={`${styles.backgroundImage} ${styles.backgroundText} ${styles.backgroundColumns}`}
    >
        <h1>Events</h1>
    </header>
  );
};

export default PageHeaders;
