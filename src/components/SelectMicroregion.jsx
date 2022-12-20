import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionSetDetailsMicroregion } from '../redux/actions';
import { getDetailsMicroregion } from '../services';

function SelectMicroregion() {
  const dispatch = useDispatch()
  
  const options = useSelector(({ microregion }) => microregion);
  
  const [microregionId, setmicroregionId] = useState('');
  
  useEffect(() => {
    const getApi = async () => {
      const response = await getDetailsMicroregion(microregionId)
      dispatch(actionSetDetailsMicroregion(response))
    }
    getApi()
  }, [dispatch, microregionId]);
  
  return (
    <div>
      <label htmlFor="stateSelect">Escolha uma Microregião:</label>
      <select
        id="microregionSelect"
        value={microregionId}
        onChange={e => setmicroregionId(e.target.value)}
      >
        <option value="" disabled hidden>
          Selecione uma Microregião
        </option>
        {options.sort((a, b) => (a > b)).map(state => (
          <option key={state.id} value={state.id}>
            {state.nome}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectMicroregion;