import React, { createContext } from "react";
import { FirebaseConfig } from "../config";

import app from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

import { store } from "./store/store";
import { 
    fetchPharmacies, 
    selectedPharmacy, 
    selectedLocation 
} from "./actions/pharmacyactions";

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
        api:{
            fetchPharmacies:() => (dispatch) => fetchPharmacies()(dispatch)(firebase),
            selectedLocation:(location) => (dispatch) => selectedLocation()(location)(dispatch),
            selectedPharmacy:(pharmacyID) => (dispatch) => selectedPharmacy()(pharmacyID)(dispatch)
            //testingIT: "Hi from context"
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