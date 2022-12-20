import { SET_STATESBR_TYPE, SET_MICROREGION_TYPE } from "../actions";


const INITIAL_STATE = {
  statesBr: [],
  microregion: [],
}

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_STATESBR_TYPE:
      return {
        ...state,
        statesBr: action.payload,
      }
    case SET_MICROREGION_TYPE:
      return {
        ...state,
        microregion: action.payload,
      }         
    default:
      break;
  }
}

export default rootReducer;