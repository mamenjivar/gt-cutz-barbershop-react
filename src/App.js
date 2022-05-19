import NavigationBar from './components/NavigationBar/NavigationBar.tsx';
import SidebySide from './components/SidebySideContent/SideBySide';
import Home from './pages/Home/Home.jsx';

function App() {
  return (
    <div>
      <NavigationBar />
      <Home />
      <SidebySide />
    </div>
  );
}

export default App;
