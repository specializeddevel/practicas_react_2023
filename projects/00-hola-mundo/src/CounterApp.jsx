import { useState } from "react";
import PropTypes from "prop-types";


//se desestructura la prop y se obtiene value
export const CounterApp = ({value}) => {

    const [ counter, setCounter] = useState( value );

    const handleAdd  = () => {
        //setCounter(counter + 1);
        setCounter( (c) => c+1 );
    }
    const handleDec  = () => {
        //setCounter(counter + 1);
        setCounter( (c) => c-1 );
    }
    const handleReset  = () => {
        //setCounter(counter + 1);
        setCounter( (c) => value);
    }
    return (
        <>
            <h1>CounterApp</h1>
            {/* Se escribe el valor de value que llega como prop */}
            <h2> { counter } </h2>
            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleDec }>-1</button>
            <button onClick={ handleReset }>Reset</button>
        </>
  )
}

//Se valida que la prop value sea de tipo numerico y obligatoria
CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}