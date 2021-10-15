import { 
    FETCH_ALL_PHARMACIES,
    FETCH_ALL_PHARMACIES_SUCCESS,
    FETCH_ALL_USERS_FAILED,
  } from "../store/types";
  
  export const INITIAL_STATE = {
    pharmacies:null,
    loading: false,
    error:{
      flag:false,
      msg: null
    }
  }
  
  export const pharmacyreducer =  (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case FETCH_ALL_PHARMACIES:
        return {
          ...state,
          loading:true
        };
      case FETCH_ALL_PHARMACIES_SUCCESS:
        return {
          ...state,
          pharmacies:action.payload,
          loading:false
        };
      case FETCH_ALL_USERS_FAILED:
        return {
          ...state,
          users:null,
          loading:false,
          error:{
            flag:true,
            msg:action.payload
          }
        };
      default:
        return state;
    }
  };