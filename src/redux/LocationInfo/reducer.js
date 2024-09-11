import {
  SAVE_SEARCH,
} from './types';

const initState = {
  resultData: [],
};

const setResultDetails = (state, data) => {
  return {
    ...state,
    resultData: [
    ...state.resultData, data
    ],
  };
};



const userLocationDetails = (state = initState, {type, playload}) => {
  switch (type) {
    case SAVE_SEARCH: {
      return setResultDetails(state, playload);
    }
    default:
      return state;
  }
};

export default userLocationDetails;
