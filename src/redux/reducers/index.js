import { SET_STATESBR_TYPE } from "../actions";

const INITIAL_STATE = []

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_STATESBR_TYPE:
      return {
        ...state,
        statesBr: action.payload,
      }     
        
    default:
      break;
  }
}

export default rootReducer;
