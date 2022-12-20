const BASE_API_URL = "https://servicodados.ibge.gov.br/api/v1/localidades/";

export const getStatesBr = async () => {
  const response = await fetch(`${BASE_API_URL}estados`);
  const data = await response.json();

  return data;
};

export const getMicroregion = async (UF) => {
  const response = await fetch(`${BASE_API_URL}estados/${UF}/municipios`);
  const data = await response.json();

  return data;

}

export const getDetailsMicroregion = async (municipalityId) => {
  if (!municipalityId) {
    return []
  }
  
  const response = await fetch(`${BASE_API_URL}municipios/${municipalityId}/distritos`);
  const data = await response.json();

  return data;
}