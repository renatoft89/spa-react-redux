import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import SelectMicroregion from '../components/SelectMicroregion';
import SelectStatesBr from '../components/SelectStatesBr';
import { actionSetStatesBr } from '../redux/actions';
import { getStatesBr } from '../services';


function Home() {
  const dispatch = useDispatch();

  useEffect (() => {
    const getApi = async () => {
      const response = await getStatesBr();
      dispatch(actionSetStatesBr(response));  
    }  
    getApi();
  }, [dispatch])

  return (
    <div>
      <SelectStatesBr />
      <SelectMicroregion />
    </div>
  );
}

export default Home;