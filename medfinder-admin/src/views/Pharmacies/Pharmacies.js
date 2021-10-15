import React, {useState, useEffect, useContext} from 'react'
import { Link } from 'react-router-dom';

import { FirebaseContext } from '../../common';
import { useSelector, useDispatch } from "react-redux";

// components
import Layout from '../../components/Layout/Layout';
import Loader from '../../components/Loader/Loader';
import Modal from '../../components/Modal/Modal';

function Pharmacies() {

	const { api } = useContext(FirebaseContext);

	const pharmacy = useSelector(state => state.pharmacy);
    const dispatch = useDispatch();

	const [state, setState] = useState({
		fetchedPharmacies:null
	})

	useEffect(() => {
		if(pharmacy.pharmacies){
			setState({...state, fetchedPharmacies: pharmacy.pharmacies})
		}
	}, [pharmacy.pharmacies])

	const { fetchedPharmacies } = state;

	return (
	 pharmacy.loading ? <Loader/>: <Layout>

		 
			<div className='control'>
				<h1 className='subtitle'>Pharmacies</h1>
				<Link to='/addpharmacy' className='button is-primary'>
					Add New pharmacy
				</Link>
			</div>

				<table className='table'>
					<thead>
						<tr>
							<th>Title</th>
							<th>View</th>
							<th>Edit </th>
							<th>Delete </th>
						</tr>
					</thead>
					{fetchedPharmacies && fetchedPharmacies.map((singlePharm) => {
							const {id, name} = singlePharm

							return(
								<tbody>
								<tr key={id}>
									<td>{name}</td>
									<td>
										<Link to={`/`}>
											<button className='button is-link'>View</button>
										</Link>
									</td>
									<td>
										<Link to={`/`}>
											<button className='button is-link'>Edit</button>
										</Link>
									</td>
									<td>
										<button className='button is-danger' >
											Delete
										</button>
									</td>
								</tr>
					</tbody>
							) 
					})}

							
				</table>



		</Layout>
	)
}

export default Pharmacies
