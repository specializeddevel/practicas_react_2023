import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch", "Dragon ball"]);

  const onAddCategory = (newCategory) => {
    //console.log(newCategory);
    //Si la categoria ya existe en el array, no hace nada y retorna
    if (categories.includes(newCategory)) return;
    //Agrega la nueva categoria al arreglo
    setCategories([newCategory, ...categories]);
    //Esta forma de abajo de hacer el set con una funcion de callback tambien funciona
    //setCategories( (c) => [newCategory, ...c])
  };

  return (
    <>
      {/* titulo         */}
      <h1>GifExpertApp</h1>
      {/* input */}
      <AddCategory onNewCategory={onAddCategory} />

      {/* listado de gifts */}
      <ol>
        {/* se crea la lista de items con cada categiria presente en el arreglo de categorias */}
        {categories.map((category) => {
          return <li key={category}>✔️ {category}</li>;
        })}
      </ol>
      {/* gift item */}
    </>
  );
};
