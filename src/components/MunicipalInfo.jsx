import React from 'react';
import { useSelector } from 'react-redux';

function MunicipalInfo() {
  const detailsRegion = useSelector(({ detailsMicroregion }) => detailsMicroregion);
  console.log(detailsRegion);
  return (
    <div>
      <h1>Informações da Região</h1>
    </div>
  );
}

export default MunicipalInfo;