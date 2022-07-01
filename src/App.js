import { Fragment } from 'react';
import Footer from './components/Footer/Footer';
import MeetTheTeam from './components/MeetTheTeam/MeetTheTeam';
import NavigationBar from './components/NavigationBar/NavigationBar.tsx';
import SidebySideLR from './components/SidebySideContent/SidebySideContentLR/SideBySideLR';
import SideBySideRL from './components/SidebySideContent/SidebySideContentRL/SideBySideRL';
import Home from './pages/Home/Home.jsx';

import { Element } from 'react-scroll';

function App() {
  return (
    <Fragment>
      <NavigationBar />
      <Home />
      <Element id="hours-destination" name="hours-destination">
        <SidebySideLR />
      </Element>
      <Element id="location-destination" name="location-destination">
        <SideBySideRL />
      </Element>
      <Element id="team-destination" name="team-destination">
        <MeetTheTeam />
      </Element>
      <Footer />
    </Fragment>
  );
}

export default App;
