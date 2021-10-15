import React, { useState, useEffect, useContext } from 'react';
import Header from '../../components/header';
import Product from '../../components/product/card';
import { useSelector, useDispatch } from "react-redux";

import { FirebaseContext } from '../../common';

import './styles.css';

const Pharmacy= ({match}) => {

  const [currentPharm, setCurrentPharm] = useState(null);

  const { api } = useContext(FirebaseContext);
  const {fetchPharmacies} = api;
  const dispatch = useDispatch();
  const pharmacy = useSelector(state => state.pharmacy);

  useEffect(()=>{
    dispatch(fetchPharmacies());
 },[])

 const { pharmacies } = pharmacy;

 useEffect(()=>{
  const pharm = pharmacies.filter((pharm) => pharm.id === match.params.id);
  setCurrentPharm(pharm);
},[pharmacies])
  return (
    <div className="h-100">
      <Header />
      <div className="container">
        <div className="row">
          
          {currentPharm && currentPharm.map((p) =>{
            return(
             <div className="col-2">
              <img src={p.image} className="img-fluid petshop-image" />
              <b>{p.name}</b>
              <div className="petshop-infos">
                <span className="mdi mdi-star"></span>
                <text>
                  <b>2,8</b>
                </text>
                <span className="mdi mdi-cash-usd-outline"></span>
                <text>Clinica Dentista</text>
                <span className="mdi mdi-crosshairs-gps"></span>
                <text>2,9km</text>
              </div>
              <label className="badge badge-primary">Free Delivery</label>
            </div>
            )
          })}
      
       


          <div className="col-10">
            <h5>Produtos</h5>
            <br />
            <div className="row">
              <Product/>
              <Product/>
              <Product/>
              <Product/>
              <Product/>
              <Product/>
              <Product/>
            </div>
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default Pharmacy;
