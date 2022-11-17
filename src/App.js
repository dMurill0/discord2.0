
import './App.css';
import Descubre from './components/Descubre';
import Principal from './components/Principal';
import Usuarios from './components/Usuarios';

function App() {
  return (
    <div className="flex bg-[#393943] h-screen">
      {/* Usuarios */}
      <Usuarios />
      {/* Discover */}
      <Descubre />
      {/* Contenido principal */}
      <Principal />
    </div>

  );
}

export default App;
