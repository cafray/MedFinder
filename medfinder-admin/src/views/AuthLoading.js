import React,{ useEffect, useContext } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { FirebaseContext } from '../common'

import './../components/Loader/Loader'
import Loader from './../components/Loader/Loader';

function AuthLoading(props) {

    const { api } = useContext(FirebaseContext);

    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);

    const {
        signOut,
        fetchUser,
        fetchPharmacies
    } = api;

    useEffect(()=>{
        dispatch(fetchUser());
    },[dispatch, fetchUser])

    useEffect(()=>{
        if(auth.info){
            if(auth.info.profile){
                //props.history.push('/dashboard');
                dispatch(fetchPharmacies());
            }
        }else{
            dispatch(signOut())
        }

    },[auth.info]);

    return (
          auth.loading ? <Loader/> : props.children
    )
}

export default AuthLoading
