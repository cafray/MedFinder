import React, { createContext } from "react";
import { FirebaseConfig } from "../config";

import app from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

import { store } from "./store/store";

import { 
    emailSignUp,
    signIn,
    fetchUser,
    signOut
 } from "./actions/authactions";

 import { addPharmacy, fetchPharmacies } from "./actions/pharmacyactions";

 import { addMedication } from "./actions/medsactions";

const FirebaseContext = createContext(null);

const FirebaseProvider = ({children}) =>{
    let firebase={
        app: null,
        database:null,
        auth:null,
        storage:null
    }
if(!app.apps.length){
    app.initializeApp(FirebaseConfig);

    firebase ={
        app:app,
        firestore: app.firestore(),
        authRef: app.auth,
        auth: app.auth(),
        singleUserRef:(uid) => app.firestore().collection("Users").doc(uid),
        pharmacyImgRef:(uid,timestamp) => app.storage().ref(`pharmacies/${uid}/phamarcyImages/${timestamp}/`),
        medicationImgRef:(uid,timestamp) => app.storage().ref(`medication/${uid}/medicationImages/${timestamp}/`),
        api:{
            emailSignUp:(data) => emailSignUp(data)(firebase),
            signIn: (email, password) => (dispatch) => signIn(email, password)(dispatch)(firebase),
            fetchUser: () => (dispatch) => fetchUser()(dispatch)(firebase),
            signOut: () => (dispatch) => signOut()(dispatch)(firebase),
            addPharmacy:(data) => addPharmacy(data)(firebase),
            addMedication:(data) => addMedication(data)(firebase),
            fetchPharmacies:() => (dispatch) => fetchPharmacies()(dispatch)(firebase)
        }
    }
}

return(
    <FirebaseContext.Provider value={firebase}>
        {children}
    </FirebaseContext.Provider>
)
}

export {
    FirebaseContext,
    FirebaseProvider,
    store
}