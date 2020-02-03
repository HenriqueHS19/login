import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../../services/api';

import './style.css';

export default function Login({ history }) {

    const [ nameUser, setNameUser ] = useState('');
    const [ passwordUser, setPasswordUser ] = useState('');

    async function login(event) {
        event.preventDefault();

        const response = await api.post('/login', {
            nameUser,
            passwordUser
        });

        if (response.data.length > 0) {
            const { idUser } = response.data[0];
            history.push('user/' + idUser);
        }
        else {
            alert('User not exists');
        }

    }

    return ( 
        <div className = "container">
            <div className = "box">
                <h3> Account Login </h3>
                <form onSubmit = { login } >
                    <input type = "text" placeholder = "Username" onChange = { function(event) {
                        setNameUser(event.target.value);
                    }}/>
                    <input type="password" placeholder="Password" onChange={ function (event) {
                        setPasswordUser(event.target.value);
                    }} />
                    <button type = "submit"> Sign in </button>
                </form>

                <div className = "group-options">
                    <p> Forgot <Link to="/login/recovery" > Username / Password? </Link> </p>
                    <p> Create an account? <Link to="/login/register"> Sign up </Link> </p>    
                </div>
               
            </div> 
        </div>
    );
}