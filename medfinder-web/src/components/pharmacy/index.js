import React,{ useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './styles.css';
import { FirebaseContext } from '../../common';


const Pharmacy = ({pharmacy}) => {
  
  const {api } = useContext(FirebaseContext);

  const { selectedPharmacy, selectedLocation } = api;

  const dispatch = useDispatch();
  const { pharmacyMapSelected } = useSelector(state => state.pharmacy)

  const setSelectedPharmacy = () => {
    // set the map in the center
    // set selected pharmacy
    dispatch(selectedPharmacy(pharmacy.id));
    dispatch(selectedLocation(pharmacy.coordinates));
  }

  return (
    <li
      className={`petshop d-inline-block ${pharmacyMapSelected === pharmacy.id ? 'active': ''}`}
      onClick={() => setSelectedPharmacy()}
    >
      <div className="d-inline-block">
        <img src={pharmacy.image} className="img-fluid" />
      </div>
      <div className="d-inline-block pl-3 align-bottom">
        <b>{pharmacy.name}</b>
        <div className="petshop-infos">
          <span className="mdi mdi-star"></span>
          <text>
            <b>2,8</b>
          </text>
          <span className="mdi mdi-cash-usd-outline"></span>
          <text>ZAR</text>
          <span className="mdi mdi-crosshairs-gps"></span>
          <text>2,9km</text>
        </div>
        <label className="badge badge-primary">Free delivery</label>
      </div>
    </li>
  );
};

export default Pharmacy;
