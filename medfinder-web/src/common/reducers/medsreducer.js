import {
    FETCH_ALL_MEDS,
    FETCH_ALL_MEDS_SUCCESS,
    FETCH_ALL_MEDS_FAILED
  } from '../store/types';

const INITIAL_STATE = {
  meds: [],
  loading:false
};

export const medsreducer =  (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case FETCH_ALL_MEDS:
        return {
          ...state,
          loading:true
        };
      case FETCH_ALL_MEDS_SUCCESS:
        return {
          ...state,
          meds:action.payload,
          loading:false
        };
      case FETCH_ALL_MEDS_FAILED:
        return {
          ...state,
          meds:null,
          loading:false,
        };
      default:
        return state;
    }
  };