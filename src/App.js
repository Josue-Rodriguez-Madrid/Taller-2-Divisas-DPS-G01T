import {useState, useEffect} from 'react';
import './App.css';


function App() {
  const [dolar, setDolar] = useState(0);
  const [euro, setEuro] = useState(0);
  const [bitcoin, setBitcoin] = useState(0);
  const [yen, setYen] = useState(0);
  const [libra, setLibra] = useState(0);
  const [peso, setPeso] = useState(0);

  const [tipo, setTipo] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setDolar((total * tipo) / 1);
    setEuro((total * tipo) / 0.85);
    setBitcoin((total * tipo) / 0.000022);
    setYen((total * tipo)  / 110.28);
    setLibra((total * tipo) / 0.72);
    setPeso((total * tipo) / 20.06);
  }, [total, tipo]);


  const handleTotalChange = e => {
    if (!isNaN(e.target.value)) {
      setTotal(e.target.value);
    }
  };


  return (
    <div className="App">
      <h1>Convertidor de divisas</h1>

      <p>Dolar: {dolar}</p>
      <p>Euro: {euro}</p>
      <p>Bitcoin: {bitcoin}</p>
      <p>Yen: {yen}</p>
      <p>Libra: {libra}</p>
      <p>Peso: {peso}</p>

      <hr />

      <h3>{total}</h3>

      <select onChange={event => setTipo(event.target.value)} value={tipo}>
        <option value={1}>Dolar</option>
        <option value={0.85}>Euro</option>
        <option value={0.000022}>Bitcoin</option>
        <option value={110.28}>Yen</option>
        <option value={0.72}>Libra</option>
        <option value={20.06}>Peso</option>
      </select>
      <input onChange={handleTotalChange} value={total} />
    </div>
  );
}

export default App;
