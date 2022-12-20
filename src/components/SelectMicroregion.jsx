import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDetailsMicroregion } from '../services';

function SelectMicroregion() {
  const dispatch = useDispatch()
  
  const options = useSelector((state) => state);

  const [microregion, setMicroregion] = useState('');
  
  useEffect(() => {
    const getApi = async () => {
      const response = await getDetailsMicroregion(microregion)
      dispatch()
    }
  })
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