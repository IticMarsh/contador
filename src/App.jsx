import React, { useState } from 'react';
import Boton from './button';

const App = () => {
  const [numClicks, setNumClicks] = useState(0);

  const incrementNum = () => {
    setNumClicks(numClicks + 1);
    console.log("Incrementando el número de clics...");
  };

  const reiniciarNum = () => {
    setNumClicks(0);
    console.log("Reiniciando el número de clics...");
  };

  return (
    <div>
      <Boton text="Clic" onClick={incrementNum} esClick={true} />
      <Boton text="Reiniciar" onClick={reiniciarNum} esClick={false} />
      <NumeroClics numClicks={numClicks} />
    </div>
  );
};

const NumeroClics = ({ numClicks }) => {
  return <p>Número de clics: {numClicks}</p>;
};

export default App;

