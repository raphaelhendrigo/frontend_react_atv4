import React from 'react';

const ListarItem = ({ onChange, onDelete, value }) => {
  return (
    <div className="Item-container">
      <input
        className="Item-field"
        value={value}
        onChange={onChange}
      />
      <button onClick={onDelete}>Excluir</button>
    </div>
  );
};

export default ListarItem;
