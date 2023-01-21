import React from 'react';
import { Fragment } from 'react';
import Footer from './components/Footer/Footer';
import NavigationBar from './components/NavigationBar/NavigationBar.tsx';
import Home from './pages/Home/Home.jsx';

function App() {
  return (
    <Fragment>
      <NavigationBar />
      <Home />
      <Footer />
    </Fragment>
  );
}

export default App;
