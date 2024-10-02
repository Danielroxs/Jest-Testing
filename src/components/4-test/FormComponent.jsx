import React, { useState } from "react";

const FormComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Escribe algo"
      />
      <button>Submit</button>
      {submitted && <p>Submitted!</p>}
    </form>
  );
};

export default FormComponent;
