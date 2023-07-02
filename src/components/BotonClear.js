import React from "react";
import "../styleSheets/BotonClear.css"


const BotonClear = ({ children, manejarClear }) => {

  return (
    <div className="boton-clear"
      onClick={manejarClear}>
      {children}
    </div>
  );
};

export default BotonClear;