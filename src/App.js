import './App.css';
import Boton from './components/Boton';
import Pantalla from './components/Pantalla';
import BotonClear from './components/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState("");

  const maxDigitos = 20;

  const agregarInput = (val) => {

    if (input.length <= maxDigitos) {
      setInput(input + val);
    } else {
      alert("Se ha alcanzado el número máximo de dígitos")
    }
  };

  const calcularResultado = () => {

    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Por favor, ingrese valores para realizar cálculos")
    }
  };



  return (
    <div className="App">
      <h1>CALCULADORA</h1>
      <div className='contenedor-calculadora'>
        <Pantalla input={input} />
        <div className='fila'>
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton></div>
        <div className='fila'>
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>/</Boton></div>
        <div className='fila'>

          {/* Cuando la función es sencilla podemos hacer manejarClear con función anónima, no como en manejarClick={agregarInput} en el resto de botones */}
          <BotonClear manejarClear={() => setInput("")} >
            Clear
          </BotonClear>
        </div>


      </div>

    </div>
  );
}

export default App;
