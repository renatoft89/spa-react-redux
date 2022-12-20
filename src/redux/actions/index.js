export const SET_STATESBR_TYPE = 'SET_STATESBR';
export const SET_MICROREGION_TYPE = 'SET_MICROREGION'

export const actionSetStatesBr = (payload) => ({
  type: SET_STATESBR_TYPE,
  payload,
});

export const actionSetMicroregion = (payload) => ({
  type: SET_MICROREGION_TYPE,
  payload,
})