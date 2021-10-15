import {
    FETCH_ALL_PHARMACIES,
    FETCH_ALL_PHARMACIES_SUCCESS,
    FETCH_ALL_PHARMACIES_FAILED,
    SET_SELECTED_PHARMACY,
    SET_MAP_CENTER
  } from '../store/types';

export const fetchPharmacies = () => (dispatch) => async (firebase) => {

    const { firestore } = firebase;

    dispatch({
      type: FETCH_ALL_PHARMACIES,
      payload: null
    });

    firestore.collection("Pharmacies").get().then((data) => {
       const pharmacies = [];
        data.forEach((doc) => {
          pharmacies.push({
            id: doc.id,
            description: doc.data().description,
            name: doc.data().name,
            image: doc.data().image,
            coordinates: doc.data().coordinates
          });
        });

        dispatch({
          type: FETCH_ALL_PHARMACIES_SUCCESS,
          payload: pharmacies
        });

        return console.log(pharmacies);
      })
      .catch((err) => {
        return console.log(err);
      });
}

export const selectedPharmacy = () => (pharmacyID) => (dispatch) => {
    dispatch({
      type:SET_SELECTED_PHARMACY,
      payload: pharmacyID
    })
}

export const selectedLocation = () => (location) => (dispatch) => {
  dispatch({
    type:SET_MAP_CENTER,
    payload: location
  })
}

