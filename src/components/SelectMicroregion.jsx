import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function SelectMicroregion() {
  const [microregion, setMicroregion] = useState('');
  const options = useSelector((state) => state);
  console.log(options);
  if (!options) {
    return <p>Carregando...</p>
  }

  return (
    <div>
      <label htmlFor="stateSelect">Escolha uma Microregião:</label>
      <select
        id="microregionSelect"
        value={microregion}
        onChange={e => setMicroregion(e.target.value)}
      >
        <option value="" disabled hidden>
          Selecione uma Microregião
        </option>
        {options.microregion.sort((a, b) => (a > b)).map(state => (
          <option key={state.nome} value={state.sigla}>
            {state.nome}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectMicroregion;