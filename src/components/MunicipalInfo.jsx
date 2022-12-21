import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

function MunicipalInfo() {
  const detailsRegion = useSelector(({ detailsMicroregion }) => detailsMicroregion);
  console.log(detailsRegion);
  return (
    <div className='details-region'>
      <h1 className='title-info'>Informações das Cidades e Distritos da Região</h1>
      {
        detailsRegion.map((region) => (
          <Fragment key={region.id}>
            <h2 className='city-name'>{region.nome}</h2>
            <p className='region-name'>Sua Microregião é: {region.municipio.microrregiao.nome}</p>
            <p className='messoregion-name'>Sua mesorregião é: {region.municipio.microrregiao.mesorregiao.nome}</p>
            <p className='state-name'>Pertence ao estado:  
              { region.municipio.microrregiao.mesorregiao.UF.nome} - {region.municipio.microrregiao.mesorregiao.UF.sigla} </p>
            <p>Sua Região é: {region.municipio['regiao-imediata'].nome}</p>
          </Fragment>
        ))
      }
    </div>
  );
}

export default MunicipalInfo;