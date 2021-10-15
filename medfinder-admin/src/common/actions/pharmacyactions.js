
import {
    FETCH_ALL_PHARMACIES_SUCCESS,
    FETCH_ALL_PHARMACIES,
    FETCH_USER_FAILED,
    USER_SIGN_IN,
    USER_SIGN_IN_FAILED,
    USER_SIGN_OUT,
    CLEAR_LOGIN_ERROR,
    UPDATE_USER_PROFILE,
    SEND_RESET_EMAIL,
    SEND_RESET_EMAIL_SUCCESS,
    SEND_RESET_EMAIL_FAILED,
    USER_DELETED,
    REQUEST_OTP,
    REQUEST_OTP_SUCCESS,
    REQUEST_OTP_FAILED
  } from '../store/types';

    export const addPharmacy = (pharmacyData) => async (firebase) => {

      const {
          pharmacyImgRef
        } = firebase;

      if (pharmacyData.image !== null ) {
        let timestamp = new Date().toISOString();
        await pharmacyImgRef(timestamp).put(pharmacyData.image);
        pharmacyData.image = await pharmacyImgRef(timestamp).getDownloadURL();
        console.log(pharmacyData.image);

        let url = 'https://us-central1-medsfinder-36d77.cloudfunctions.net/add_pharmacy'
    
        const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ pharmacyData: pharmacyData })
        })
        return await console.log(response.json());
}

};

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
            image: doc.data().image
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