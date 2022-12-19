const BASE_STATESBR_URL = "https://servicodados.ibge.gov.br/api/v1/localidades/estados";

export const getStatesBr = async () => {
  const response = await fetch(BASE_STATESBR_URL);
  const data = await response.json();

  return data;
};