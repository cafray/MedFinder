import React,{ useState, useContext } from 'react';
import Layout from '../../components/Layout/Layout';
import { withRouter } from 'react-router-dom';
import { FirebaseContext } from '../../common';
import { useSelector, useDispatch } from "react-redux";
import {
	geocodeByAddress,
	geocodeByPlaceId,
	getLatLng,
  } from 'react-places-autocomplete';

  import PlacesAutocomplete from 'react-places-autocomplete';


// components
import Error from '../../components/Error/Error';
import Loader from '../../components/Loader/Loader';
import Modal from '../../components/Modal/Modal';

// helpers
function Newpharmacy() {
	
	const { api } = useContext(FirebaseContext);

    const {
        addPharmacy
    } = api; 

	const dispatch = useDispatch();

	const [state, setState] = useState({
			name: '',
			description: '',
			image: null,
			coordinates:null
	})

	const [pharmacyAddress, setPharmacyAddress] = useState({
		Address:''
	});
	const[pharmacyCords, setPharmacyCords] = useState({});
	
	const handleSelect = (address) => {
		geocodeByAddress(address)
		  .then(results => getLatLng(results[0]))
		  .then(latLng => {
			  setState({...state, coordinates: latLng})
			  console.log('Success', latLng)}
			)
		  .catch(error => console.error('Error', error));
	  };
	
	  const handleChangeTwo = (address) => {
		setPharmacyAddress({address});
	  };

	const handleChange = (e) =>{
		setState({
			...state, [e.target.name]: e.target.name === 'image' ? e.target.files[0] : e.target.value
		})
	}
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(state)
		dispatch(addPharmacy(state))
	}
		return (
			<Layout>
				<div className='columns is-centered'>
					<div className='column is-half'>
						<h1 className='subtitle'>Add New Pharmacy</h1>
						<form
							onSubmit={(e)=> handleSubmit(e)}>
							<div className='field'>
								<label className='label'>Pharmacy Name</label>
								<input
									className='input'
									placeholder='name'
									name='name'
									value={state.name}
									onChange={(e) => handleChange(e)}
								/>
							</div>

						<div className='field'>
							<label className='label'>Pharmacy Address</label>
							<p>lat:{pharmacyCords.lat}</p>
							<p>long:{pharmacyCords.lng}</p>
							<PlacesAutocomplete
									value={pharmacyAddress.address}
									onChange={handleChangeTwo}
									onSelect={handleSelect}
								>
									{({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
									<div>
										<input
										{...getInputProps({
											placeholder: 'Search Places ...',
											className: 'input',
										})}
										/>
										<div className="autocomplete-dropdown-container">
										{loading && <div>Loading...</div>}
										{suggestions.map(suggestion => {
											const className = suggestion.active
											? 'suggestion-item--active'
											: 'suggestion-item';
											// inline style for demonstration purpose
											const style = suggestion.active
											? { backgroundColor: '#fafafa', cursor: 'pointer' }
											: { backgroundColor: '#ffffff', cursor: 'pointer' };
											return (
											<div
												{...getSuggestionItemProps(suggestion, {
												className,
												style,
												})}
											>
												<span>{suggestion.description}</span>
											</div>
											);
										})}
										</div>
									</div>
									)}
								</PlacesAutocomplete>

						</div>



							<div className='field'>
								<label className='label'>Description</label>
								<textarea
									className='textarea'
									placeholder='description'
									name='description'
									value={state.description}
									onChange={(e) => handleChange(e)}
								/>
							</div>

							<div className='field'>
								<label className='label button is-primary'>
									Upload an image
									<input
										required
										className='button is-link'
										type='file'
										name='image'
										onChange={(e) => handleChange(e)}
									/>
								</label>
							</div>
							<br />
							<button className='button is-primary'>Create</button>
						</form>
					</div>
				</div>
			</Layout>
		);
	}


export default Newpharmacy;
