const BASE_API_URL = "https://servicodados.ibge.gov.br/api/v1/localidades/estados";

export const getStatesBr = async () => {
  const response = await fetch(BASE_API_URL);
  const data = await response.json();

  return data;
};

export const getMicroregion = async (UF) => {
  const response = await fetch(`${BASE_API_URL}/${UF}/municipios`);
  const data = await response.json();

  return data;

}