import { SET_STATESBR_TYPE, SET_MICROREGION_TYPE, SET_DETAILS_MICROREGION_TYPE } from "../actions";


const INITIAL_STATE = {
  statesBr: [],
  microregion: [{id: 0, nome: "-----------"}],
  detailsMicroregion: [],
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
    case SET_DETAILS_MICROREGION_TYPE:
      return {
        ...state,
        detailsMicroregion: action.payload,
      }         
    default:
      return state;
  }
}

export default rootReducer;
