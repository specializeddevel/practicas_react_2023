import { useState } from "react";
import { Display } from "./Display";

export const Button = ({numero}) => {

    const [valor, setValor] = useState(0)

    const handleOnClick = () => {
        setValor(numero);      
        <Display valorEnviado = {valor}></Display>
        console.log(valor)
    }

  return (
    <>
        <button onClick={ handleOnClick }>{numero}</button>
    </>
  )
}
