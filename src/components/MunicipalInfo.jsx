import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import '../styles/MunicipalInfo.css'


function MunicipalInfo() {
  const detailsRegion = useSelector(({ detailsMicroregion }) => detailsMicroregion);
  console.log(detailsRegion);
  
  if (detailsRegion.length === 0) {
    return <p className='select-null'>Escolha um Estado e uma Cidade...</p>
  }

  return (
    <><div className='details-region'>
      <h1 className='title-info'>Informações das Cidades e Distritos da Região</h1>
      <section className='container-details'>
        {detailsRegion.map((region) => (
          <Fragment key={region.id}>
            <div className='card-detais'>
              <h2 className='city-name'>{region.nome}</h2>
              <p className='region-name'>Microregião: {region.municipio.microrregiao.nome}</p>
              <p className='messoregion-name'>Messorregião: {region.municipio.microrregiao.mesorregiao.nome}</p>
              <p className='state-name'>UF:&nbsp;
              {region.municipio.microrregiao.mesorregiao.UF.nome} - &nbsp;
              {region.municipio.microrregiao.mesorregiao.UF.sigla} </p>
              <p>Região: {region.municipio['regiao-imediata'].nome}</p>
            </div>
          </Fragment>
        ))}
      </section>
      <section className='img-state'>
        <h3>{detailsRegion[0].municipio.microrregiao.mesorregiao.UF.nome}</h3>
        <img 
          src={require(`../assets/img/${detailsRegion[0].municipio.microrregiao.mesorregiao.UF.sigla}.png`)} 
          alt={detailsRegion[0].municipio.microrregiao.mesorregiao.UF.nome}
        >
        </img>
      </section>
    </div>
    </>
  );
}

export default MunicipalInfo;