import './App.css';
import Footer from './components/Footer';
import Servicio from './components/Servicio';
import Suscripcion from './components/Suscripcion';

function App() {
  return (
    <div className="App">

      <Servicio />
      <Suscripcion />
      <Footer />
    </div>
  );
}

export default App;
