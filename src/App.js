import React from 'react';
import { Fragment } from 'react';
import Footer from './components/Footer/Footer';
import NavigationBar from './components/NavigationBar/NavigationBar.tsx';
import Home from './pages/Home.jsx';
import Events from './pages/Events.jsx'

// Vercel analytics
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <Fragment>
      <NavigationBar />
      <Events />
      <Footer />
      <Analytics  />
    </Fragment>
  );
}

export default App;