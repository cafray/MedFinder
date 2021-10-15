import React, {useState, useContext} from 'react'
import { FirebaseContext } from '../../common';
import { useSelector, useDispatch } from "react-redux";

//style
import './SignUp.css';

function SignUp(props) {

    const { api } = useContext(FirebaseContext);
    const {
        emailSignUp
    } = api;

    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const [state, setState] = useState({
        usertype:'admin',
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
		setState({...state, [e.target.name]: e.target.value});
	}

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(state)
        dispatch(emailSignUp(state));
    }

    const handleBack = (e) => {
        e.preventDefault();
        props.history.push('/login');
      };

    return (
        <div className='columns is-centered'>
        <div className='column is-one-quarter'>
            <form method='POST' onSubmit={(e)=> handleSubmit(e)}>
                <h1 className='title'>Sign Up</h1>
                <div className='field'>
                    <label className='label'>First Name</label>
                    <input
                        className='input'
                        placeholder='First Name'
                        name='firstName'
                        value={state.firstName}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className='field'>
                    <label className='label'>Last Name</label>
                    <input
                        className='input'
                        placeholder='Last Name'
                        name='lastName'
                        value={state.lastName}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className='field'>
                    <label className='label'>Phone Number</label>
                    <input
                        className='input'
                        placeholder='Phone Number'
                        name='phone'
                        value={state.phone}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
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

export default SignUp
