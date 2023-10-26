import { useState } from "react";

export const Display = (props) => {

    const [inputValue, setInputValue] = useState(0)

    const onInputChange = ({target}) => {
        setInputValue(props)
        console.log('cambio valor input' + inputValue)
    }

  return (
    <form>
        <input
            type = "text"
            placeholder="resultado"
            value = "0"         
            readOnly = {true}
            onChange={onInputChange}  
        />
    </form>
  )
}
