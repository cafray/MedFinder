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

export const emailSignUp = (regData) => async (firebase) => {

    let url = 'https://us-central1-medsfinder-36d77.cloudfunctions.net/user_signup'
  
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ regData: regData })
    })
    return await response.json();
  };

  export const signIn = (email, password) => (dispatch) => (firebase) => {
    const {
      auth
    } = firebase;
  
    dispatch({
      type: USER_SIGN_IN,
      payload: null
    });
    auth
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        //OnAuthStateChange takes care of Navigation
        console.log(res)
      })
      .catch(error => {
        dispatch({
          type: USER_SIGN_IN_FAILED,
          payload: error
        });
      });
  };

export const fetchUser = () => (dispatch) => (firebase) => {
  const {
    auth,
    app
  } = firebase;

    dispatch({
      type: FETCH_USER,
      payload: null
    });
    auth.onAuthStateChanged(user => {
      console.log(user.uid)
      app.firestore().collection("Users").doc(user.uid).get().then((doc) => {
        if(doc.exists){
          user.profile = doc.data();
          console.log(doc.data())
          dispatch({
            type: FETCH_USER_SUCCESS,
            payload: user
          });
        }else{
          auth.signOut();
            dispatch({
              type: USER_SIGN_IN_FAILED,
              payload: 'Failed to Fetch user'
            });
        }
      })
    
    })
}

export const signOut = () => (dispatch) => (firebase) => {

  const {
    auth,
  } = firebase;

  auth
    .signOut()
    .then(() => {
      dispatch({
        type: USER_SIGN_OUT,
        payload: null
      });
    })
    .catch(error => {

    });
};