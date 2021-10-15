import React,{ useState, useContext, useEffect } from 'react';
import Layout from '../../components/Layout/Layout';
import { withRouter } from 'react-router-dom';
import { FirebaseContext } from '../../common';
import { useSelector, useDispatch } from "react-redux";

import Error from '../../components/Error/Error';
import Loader from '../../components/Loader/Loader';
import Modal from '../../components/Modal/Modal';
import Dropdown from '../../components/Dropdown/Dropdown';
// helpers
function NewMed() {
	
	const { api } = useContext(FirebaseContext);

    const {
		addMedication
    } = api; 
	
    const pharmacy = useSelector(state => state.pharmacy);
    const dispatch = useDispatch();

	const [state, setState] = useState({
		medName: '',
		price: '',
		image: '',
		pharmacyID: '',
		fetchedPharmacies:null
	})

	useEffect(() => {
		if(pharmacy.pharmacies){
			setState({...state, fetchedPharmacies: pharmacy.pharmacies})
		}
	}, [pharmacy.pharmacies])

	const { fetchedPharmacies } = state;

	const handleChange = (e) =>{
		setState({
			...state, [e.target.name]: e.target.name === 'image' ? e.target.files[0] : e.target.value
		})
	}

	const handleClick = (e, id) =>{
		e.preventDefault();
		setState({
			...state, pharmacyID: id
		});
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(addMedication(state));
		console.log(state);
	}
	return (
			pharmacy.loading ? <Loader/> : <Layout>
			<div className='columns is-centered'>
				<div className='column is-half'>
					<h1 className='subtitle'>Add New Medication</h1>
					<form
						onSubmit={(e) => {
							handleSubmit(e);
						}}>
						<div className='field'>
							<label className='label'>Medication Name</label>
							<input className='input' placeholder='Title' name='medName' onChange={(e) => handleChange(e)} />
						</div>
				
						<div className='field'>
							<label className='label'>Price</label>
							<input className='input' placeholder='Price' name='price' onChange={(e) => handleChange(e)} />							
						</div>

						<div className='field'>
							<label className='label'>Select a Pharmacy</label>
							<Dropdown listName='Select Pharmacy'>
								{fetchedPharmacies && fetchedPharmacies.map((singlePharm) =>{
									const {id, name} = singlePharm
									return (
										<a 
										   href="#"
										   className={`dropdown-item ${id === state.pharmacyID ? 'is-active' : ''}`}
										   key={id}
										   onClick={(e) => handleClick(e, singlePharm.id)}
										>{name}</a>
									)
								})}
							</Dropdown>
							
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
		)
	}


export default NewMed;
