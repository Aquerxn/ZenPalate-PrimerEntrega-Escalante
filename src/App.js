import './style.css'
import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return ( 
    <div>
    <NavBar />
    <ItemListContainer greeting="¡Bienvenido a nuestra tienda!" />
    </div>
  );
}

export default App;
