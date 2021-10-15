import React,{useContext, useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Header.css';
import { FirebaseContext } from '../../../common';
import { useSelector, useDispatch } from "react-redux";
import Loader from '../../Loader/Loader';

function Header(props) {

	const auth = useSelector(state => state.auth);
	const dispatch = useDispatch();
	const { api } = useContext(FirebaseContext);
	const {
		signOut
	} = api;

	const history = useHistory();
	const handleLogOut = () => {
		dispatch(signOut())
		history.push('/login');
	}

	useEffect(() => {
        if(auth.info){
           if(auth.info.profile){
            
           } else{
			 dispatch(signOut());
             props.history.push('/login')  
           }
        }
    },[auth.info])

	return (
		auth.info.profile ? <header>
			<nav className='navbar navbar-bottom'>
				<div className='container is-fluid navbar-container'>
					<div>
						<Link to='/'>
							<h3 className='title'>Admin Panel</h3>
						</Link>
					</div>
					<div className='navbar-item'>
						{auth.info.profile && <p>{`Hi, ${auth.info.profile.firstName} ${auth.info.profile.lastName}`}</p>}
					</div>
					<div className='navbar-item'>
						<div className='navbar-buttons'>
							<button className='button is-link' onClick={(e) => handleLogOut()}>
								Logout
							</button>
						</div>
					</div>
				</div>
			</nav>
		</header>: <Loader/> 
	);
}

export default Header;
