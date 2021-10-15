import React,{ useEffect, useContext } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { FirebaseContext } from '../common';

function AssetsLoading(props) {

    const { api } = useContext(FirebaseContext);
    
    const {
        fetchPharmacies
    } = api;

    const dispatch = useDispatch();
    const pharmacy = useSelector(state => state.pharmacy);

    useEffect(()=>{

        dispatch(fetchPharmacies());

    },[])

    return (
        pharmacy.loading ? <div><p>Loading</p></div>: props.children
    )
}

export default AssetsLoading
