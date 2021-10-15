import './styles.css';
import React,{ useEffect, useContext } from 'react'
import Header from '../../components/header';
import Pharmacy from '../../components/pharmacy';
import Map from '../../components/map';

import { useSelector, useDispatch } from "react-redux";

import { FirebaseContext } from '../../common';

const Home = (props) => {

  const { api } = useContext(FirebaseContext);
  const {fetchPharmacies} = api;
  const dispatch = useDispatch();
  const pharmacy = useSelector(state => state.pharmacy);

    useEffect(()=>{
       dispatch(fetchPharmacies());
    },[])

  const { pharmacies } = pharmacy;

  return (
    <div className="h-100">
      <Header />
      <div className="container-fluid petshop-list-container">
        <div className="col-12 px-4 text-center">
          <h5>Pharmacies close to you (5)</h5>
        </div>
        <ul className="col-12 petshop-list">
          
          {pharmacies.map((p) =>(
           <Pharmacy pharmacy={p}/>
          )
          )}
        </ul>
      </div>
      <Map pharmacies={pharmacies}/>
    </div>
  );
};

export default Home;
