import React, { useState } from 'react';
import './App.css';
import ListarItem from './ListarItem'
import FraseEntrada from './FraseEntrada'

const App = () => {
  const [frases, setFrases] = useState([]);

  function addNovaFrase(frase) {
    const itensCopiados = Array.from(frases);
    itensCopiados.push({id: frases.length, value: frase});
    setFrases(itensCopiados);
  }

  function updateFrase({target}, index) {
    const itensCopiados = Array.from(frases);
    itensCopiados.splice(index, 1, { id: index, value: target.value });
    setFrases(itensCopiados);
  }

  function deleteFrase(index) {
    const itensCopiados = Array.from(frases);
    itensCopiados.splice(index, 1);
    setFrases(itensCopiados);
  }

  return (
    <div className="App">
      <div className="App-header">
        <FraseEntrada onSubmit={addNovaFrase} />
        {frases.map(({id, value}, index) => (
          <ListarItem
            key={id}
            value={value}
            onChange={(event) => updateFrase(event, index)}
            onDelete={() => deleteFrase(index)}
          />
        ))}
      </div>
      
    </div>
  )
}

export default App;
