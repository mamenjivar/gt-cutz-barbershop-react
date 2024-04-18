import React from 'react';
import { Fragment } from 'react';
import Footer from './components/Footer/Footer';
import NavigationBar from './components/NavigationBar/NavigationBar.tsx';
import Home from './pages/Home/Home.jsx';
import ReactGA from 'react-ga4';

// Vercel analytics
//import { Analytics } from '@vercel/analytics/react';

function App() {
  const TRACKING_ID = 'G-S8WEFRJ4E1';
  ReactGA.initialize(TRACKING_ID)
  ReactGA.send({ hitType: 'pageView', page: '/'});

  return (
    <Fragment>
      <NavigationBar />
      <Home />
      <Footer />
    </Fragment>
  );
}

export default App;