import React from 'react';
import { Fragment } from 'react';
import Footer from './components/Footer/Footer';
import NavigationBar from './components/NavigationBar/NavigationBar.tsx';
import Home from './pages/Home/Home.jsx';

// Vercel analytics
import { Analytics } from '@vercel/analytics/react';


function App() {
  return (
    <Fragment>
      <NavigationBar />
      <Home />
      <Footer />
      <Analytics  />
    </Fragment>
  );
}

export default App;
