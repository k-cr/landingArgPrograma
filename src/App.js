import './App.css';
import Home from './components/Home'
import Footer from './components/Footer';
import Servicio from './components/Servicio';
import Suscripcion from './components/Suscripcion';
import Galeria from './components/Galeria';
import Ranking from './components/Ranking';

function App() {
  return (
    <div className="App">

      <Home />
      <Ranking />
      <Galeria />
      <Servicio />
      <Suscripcion />
      <Footer />
    </div>
  );
}

export default App;
