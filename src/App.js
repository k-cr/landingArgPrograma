import './App.css';
import Home from './components/Home'
import Footer from './components/Footer';
import Servicio from './components/Servicio';
import Suscripcion from './components/Suscripcion';

function App() {
  return (
    <div className="App">

      <Home />
      <Servicio />
      <Suscripcion />
      <Footer />
    </div>
  );
}

export default App;
