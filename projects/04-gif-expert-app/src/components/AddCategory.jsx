import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    //Aqui se obtiene el nuevo valor del input y se lo dibuja
    setInputValue(target.value);
  };

  const onSubmitFunction = (event) => {
    //evita que la pagina se recargue al hacer el submit del formulario
    event.preventDefault();
    const inputValueLimpio = inputValue.trim();
    //solo se setea la categoria si el inputtext es de mas de un caracter
    if (inputValueLimpio.length <= 1) return;
    //setCategories((categories) => [inputValue, ...categories])
    //se borra el input despues de agregar la categoria
    inputValueLimpio.includes("caca")
      ? onNewCategory(inputValueLimpio + "✅")
      : onNewCategory(inputValueLimpio + "🚫");
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmitFunction}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        // implicitamente se manda el event al llamar a la funcion
        onChange={onInputChange}
      />
    </form>
  );
};
