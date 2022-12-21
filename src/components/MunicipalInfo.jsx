import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

function MunicipalInfo() {
  const detailsRegion = useSelector(({ detailsMicroregion }) => detailsMicroregion);
  console.log(detailsRegion);
  return (
    <div className='details-region'>
      <h1>Informações das Cidades e Distritos da Região</h1>
      {
        detailsRegion.map((region) => (
          <Fragment key={region.id}>
            <h3>A Cidade de {region.nome}</h3>
            <p>Sua Microregião é: {region.municipio.microrregiao.nome}</p>
            <p>Sua mesorregião é: {region.municipio.microrregiao.mesorregiao.nome}</p>
            <p>Pertence ao estado: 
              {region.municipio.microrregiao.mesorregiao.UF.nome} - {region.municipio.microrregiao.mesorregiao.UF.sigla} </p>
          </Fragment>
        ))
      }
    </div>
  );
}

export default MunicipalInfo;