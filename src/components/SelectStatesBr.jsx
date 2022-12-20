import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionSetMicroregion } from '../redux/actions';
import { getMicroregion } from '../services';


function Select() {
  const dispatch = useDispatch();

  const options = useSelector(({ statesBr }) => statesBr);

  const [selectedState, setSelectedState] = useState('');

  useEffect(() => {
    const getApi = async () => {
      const response = await getMicroregion(selectedState);
      dispatch(actionSetMicroregion(response));  
    }  
    getApi();
  }, [dispatch, selectedState])

  return (
    <div>
      <label htmlFor="stateSelect">Escolha um estado:</label>
      <select
        id="stateSelect"
        value={selectedState}
        onChange={e => setSelectedState(e.target.value)}
      >
        <option value="" disabled hidden>
          Selecione um estado
        </option>
        {options.sort((a, b) => a.nome.localeCompare(b.nome)).map(state => (
          <option key={state.nome} value={state.sigla}>
            {state.nome}
          </option>
        ))}


      </select>
    </div>
  );
}

export default Select;