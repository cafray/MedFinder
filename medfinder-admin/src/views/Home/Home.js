import React,{useContext, useState, useEffect} from 'react';
import { FirebaseContext } from '../../common';
import { useSelector, useDispatch } from "react-redux";

// components
import Layout from '../../components/Layout/Layout';
import Loader from '../../components/Loader/Loader';
import Modal from '../../components/Modal/Modal';

export default function Home(props) {

	const [state, setState] = useState({
		displayModal:false,
		modalError:'',
		success:''
	})

	const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const { api } = useContext(FirebaseContext);
    const {
		signOut
      } = api;

	useEffect(() => {
        if(auth.info){
           if(auth.info.profile){
            
           } else{
			 dispatch(signOut());
             props.history.push('/login')  
           }
        }
    },[auth.info])

	return(
		auth.loading ? <Loader/>:
		<div>
			 <Layout>
				<Modal error={state.modalError} message={state.success} active={state.displayModal} />
				<p>In development</p>
			</Layout>
		</div>
	); 
	
}
