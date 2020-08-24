import React, {useState} from 'react';
import './App.css';

import * as math from 'mathjs'

function App() {
  const [f00, setf00] = useState(0);
  const [f01, setf01] = useState(0);
  const [f10, setf10] = useState(0);
  const [f11, setf11] = useState(0);

  const [d0, setd0] = useState(0);
  const [d1, setd1] = useState(0);

  const [F0, setF0] = useState(0);
  const [F1, setF1] = useState(0);

  const onChangeF00 = (e) => {
    setf00(e.target.value)
  }
  const onChangeF01 = (e) => {
    setf01(e.target.value)
  }
  const onChangeF10 = (e) => {
    setf10(e.target.value)
  }
  const onChangeF11 = (e) => {
    setf11(e.target.value)
  }
  const onChangeD0 = (e) => {
    setd0(e.target.value)
  }
  const onChangeD1 = (e) => {
    setd1(e.target.value)
  }

  const calcular = () => {
    try {
      const f = math.matrix([[Number(f00), Number(f01)], [Number(f10), Number(f11)]])
      const d = math.matrix([[Number(d0)], [Number(d1)]])
  
      const invf = math.inv(f)
  
      const F = math.multiply(-1, math.multiply(invf, d))
  
      setF0(math.subset(F, math.index(0,0)))
      setF1(math.subset(F, math.index(1,0)))
    } catch (e) {
      console.log(e)
    }
  }

  const reset = () => {
    setf00(0)
    setf01(0)
    setf10(0)
    setf11(0)

    setd0(0) 
    setd1(0) 

    setF0(0) 
    setF1(0) 
  }

  return (
    <div className="App">
      <h1>Cálculo do Vetor de Forças</h1>

      <div id="matriz-container">
        <div className="card">
          <h3>Matriz de Flexibilidade</h3>
          <div id="matrizA">
            <input type="text" value={f00} onChange={onChangeF00}/>
            <input type="text" value={f01} onChange={onChangeF01}/>
            <input type="text" value={f10} onChange={onChangeF10}/>
            <input type="text" value={f11} onChange={onChangeF11}/>
          </div>
        </div>

        <div className="card">
          <h3>Vetor de Deslocamentos</h3>
          <div id="matrizB">
            <input type="text" value={d0} onChange={onChangeD0}/>
            <input type="text" value={d1} onChange={onChangeD1}/>
          </div>
        </div>
      </div>

      <div id="buttons-container">
        <button onClick={calcular}>Calcular</button>
        <button onClick={reset}>Limpar</button>
      </div>

      <div>
        <h1>X1 = {F0}</h1>
        <h1>X2 = {F1}</h1>
      </div>

    </div>
  );
}

export default App;
