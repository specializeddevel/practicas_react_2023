import { useState } from "react";
import "./ShowHideButton.css";

export const ShowHideButton = () => {
  const [troubleButonValue, setTroubleButonValue] = useState(true);

  const handleOnClick = () => {
    setTroubleButonValue(!troubleButonValue);
  };

  return (
    <div className="container">
      <button onClick={handleOnClick}>Show / Hide</button>
      {troubleButonValue ? <h1>Welcome to React Challenges</h1> : null}
    </div>
  );
};
