import React, { useState } from "react";

const InputField = () => {
  const [text, setText] = useState(""); // Estado inicial vacío

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)} // Actualiza el estado con lo que el usuario escribe
        placeholder="Escribe algo aquí"
      />
      <p>Texto actual: {text}</p> // Muestra el texto actualizado
    </div>
  );
};

export default InputField;
