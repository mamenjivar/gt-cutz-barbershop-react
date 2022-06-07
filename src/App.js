import Footer from './components/Footer/Footer';
import MeetTheTeam from './components/MeetTheTeam/MeetTheTeam';
import NavigationBar from './components/NavigationBar/NavigationBar.tsx';
import SidebySideLR from './components/SidebySideContent/SidebySideContentLR/SideBySideLR';
import SideBySideRL from './components/SidebySideContent/SidebySideContentRL/SideBySideRL';
import Home from './pages/Home/Home.jsx';

function App() {
  return (
    <div>
      <NavigationBar />
      <Home />
      <SidebySideLR />
      <SideBySideRL />
      <MeetTheTeam />
      <Footer />
    </div>
  );
}

export default App;
