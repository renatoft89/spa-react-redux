import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MunicipalInfo from '../components/MunicipalInfo';
import SelectMicroregion from '../components/SelectMicroregion';
import SelectStatesBr from '../components/SelectStatesBr';
import { actionSetStatesBr } from '../redux/actions';
import { getStatesBr } from '../services';
import '../styles/Home.css'

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getApi = async () => {
      const response = await getStatesBr();
      dispatch(actionSetStatesBr(response));
    }
    getApi();
  }, [dispatch])

  return (
    <div>
      <Header />
      <section className='select-container'>
        <div className='select-options'>
          <SelectStatesBr />
          <SelectMicroregion />
        </div>
      </section>
      <MunicipalInfo />
      <Footer />
    </div>
  );
}

export default Home;
