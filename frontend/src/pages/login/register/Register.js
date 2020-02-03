import React, { useState } from 'react';
import api from '../../../services/api';

export default function Register() {

    const [ emailUser, setEmailUser ] = useState('');
    const [ nameUser, setNameUser ] = useState('');
    const [ passwordUser, setPasswordUser ] = useState('');

    async function register(event) {
        event.preventDefault();

        const response = await api.post('/login/register', {
            emailUser,
            nameUser,
            passwordUser
        });

        if (response) {
            alert('Registered successfully');
        } 
    }

    return (
        <div className = "container">
            <div className = "box"> 
                <h3> Create account </h3>
                <form onSubmit = { register }> 
                    <input type = "email" placeholder = "E-mail" onChange = { function(event) {
                        setEmailUser(event.target.value);
                    }}/>
                    <input type="text" placeholder="Username" onChange = { function(event) {
                        setNameUser(event.target.value);  
                    }}/>
                    <input type="password" placeholder="Password" onChange = { function(event) {
                        setPasswordUser(event.target.value);
                    }} />
                    <button type = "submit"> Register </button>
                </form>
            </div>
        </div>
    );
}