import React, { useState } from 'react';
const FraseEntrada = ({ onSubmit }) => {

  const [novoItem, setNovoItem] = useState('');

  function setNovaFrase({target}) {
    setNovoItem(target.value);
  }

  function submit(e) {
    e.preventDefault();
    onSubmit(novoItem);
  }

  return (
    <div>
      <form onSubmit={submit}>
        <input
          className="Todo-input"
          placeholder="Digite uma nova tarefa"
          onChange={setNovaFrase}
        />
        <button type="submit">
          Adicionar
        </button>
      </form>
    </div>
  )
};

export default FraseEntrada;
