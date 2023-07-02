import React from "react";

import "../styleSheets/Boton.css";


const Boton = ({ manejarClick, children }) => {

  const esOperador = (valor) => {
    return isNaN(valor) && (valor != ".") && (valor != "=");
  };


  return (
    <div className={`contenedor-boton ${esOperador(children) ? "operador" : ""}`.trimEnd()}
      onClick={() => manejarClick(children)}>
      {children}
    </div>


  )
}

export default Boton;