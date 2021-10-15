import {
    FETCH_ALL_PHARMACIES,
    FETCH_ALL_PHARMACIES_SUCCESS,
    FETCH_ALL_PHARMACIES_FAILED,
    SET_SELECTED_PHARMACY,
    SET_MAP_CENTER
  } from '../store/types';

const INITIAL_STATE = {
  pharmacies: [],
  pharmacy: {},
  pharmacyMapSelected: null,
  mapCenter: {
    lat:-25.917986,
    lng:32.594700,
  },
  cart: [],
  loading:false
};

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
      case FETCH_ALL_PHARMACIES_FAILED:
        return {
          ...state,
          pharmacies:null,
          loading:false,
        };
      case SET_SELECTED_PHARMACY:
            return {
              ...state,
              pharmacyMapSelected:action.payload,
              loading:false,
            };  
     case SET_MAP_CENTER:
        return {
            ...state,
            mapCenter:action.payload,
            loading:false,
        };        
      default:
        return state;
    }
  };

export default pharmacyreducer;
