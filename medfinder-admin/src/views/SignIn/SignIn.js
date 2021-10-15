import React,{useContext, useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

import { FirebaseContext } from '../../common';
import { useSelector, useDispatch } from "react-redux";
//style

export default function SignIn(props) {

    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const { api } = useContext(FirebaseContext);
    const {
        signIn
      } = api;

    const [state, setState] = useState({
        email: '',
        password: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(state)
        dispatch(signIn(state.email, state.password));
    }

    const handleChange = (e) => {
		setState({...state, [e.target.name]: e.target.value});
	}
    
    useEffect(() => {
        if(auth.info){
           if(auth.info.profile){
            props.history.push('/');
           } else{
             //props.history.push('/login') 
             console.log(auth.info) 
            props.history.push('signup')
           }
        }
    },[auth.info])

    return (
        <div className='columns is-centered'>
        <div className='column is-one-quarter'>
            <form method='POST' onSubmit={(e)=> handleSubmit(e)}>
                <h1 className='title'>Sign In</h1>
                <div className='field'>
                    <label className='label'>Email</label>
                    <input
                        className='input'
                        placeholder='Email'
                        name='email'
                        value={state.email}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className='field'>
                    <label className='label'>Password</label>
                    <input
                        className='input'
                        placeholder='Password'
                        name='password'
                        type='password'
                        value={state.password}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <button className='button is-primary'>Submit</button>
            </form>
        </div>
    </div>
    )
}
