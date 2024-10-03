import React, { useState } from "react";

const SelectComponent = () => {
  const [selection, setSelection] = useState("");

  const handleSelectionChange = (e) => {
    setSelection(e.target.value);
  };

  return (
    <div>
      <select onChange={handleSelectionChange} value={selection}>
        <option value="">Seleccione una opción</option>
        <option value="option1">Opción 1</option>
        <option value="option2">Opción 2</option>
        <option value="option3">Opción 3</option>
      </select>
      <p>Seleccionado: {selection}</p>
    </div>
  );
};

export default SelectComponent;
