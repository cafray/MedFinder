import {
    FETCH_USER,
    FETCH_USER_SUCCESS,
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

export const addMedication = (medsData) => async (firebase) => {

    const {
      medicationImgRef
      } = firebase;

      if (medsData.image !== null ) {
        let timestamp = new Date().toISOString();
        await medicationImgRef(timestamp).put(medsData.image);
        medsData.image = await medicationImgRef(timestamp).getDownloadURL();

        const medSent = {
          medName: medsData.medName,
          price: medsData.price,
          image: medsData.image,
          pharmacyID: medsData.pharmacyID
        }
        let url = 'https://us-central1-medsfinder-36d77.cloudfunctions.net/add_medication';
    
        const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ medSent: medSent })
        })
        return await console.log(response.json());
}

};