import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { actionSetStatesBr } from '../redux/actions';
import { getStatesBr } from '../services';


function Home() {
  const dispatch = useDispatch();

  useEffect (() => {
    const getApi = async () => {
      const response = await getStatesBr();
      dispatch(actionSetStatesBr(response))
  
    }  
    getApi();
  }, [dispatch])

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

export default Home;