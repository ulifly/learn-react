
import './App.css';

import { useState } from 'react';

import Perfil from './components/Perfil'
import MyBoton from './components/MyBoton'
import Familia from './components/Familia'
import Lista  from './components/Lista';
import BotonIndependiente from './components/BotonIndependeinte';




function App() {
  const [ contador, setContador ] = useState(0); 
  function handleClick() {
    setContador(contador + 1);
  }

  return (
    <div className='App'>
      <header>
        <Perfil/>
        <MyBoton count={contador} onClick={handleClick}/>
        <MyBoton count={contador} onClick={handleClick}/>
        <div>
            <h1>Boton Independiente</h1>
            <BotonIndependiente />
        </div>
        
        <Familia/>
        <Lista/>  
      </header>
    </div>
  );
}

export default App;
