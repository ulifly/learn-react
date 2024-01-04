import { useState } from 'react'; 

 function BotonIndependiente () {

  const [ contador, setContador ] = useState(0);
  
  function handleClick () {    
    setContador (contador + 1);

  }

    return (
        <button onClick={handleClick}>
          click {contador} veces
        </button>
    )
}

export default BotonIndependiente;