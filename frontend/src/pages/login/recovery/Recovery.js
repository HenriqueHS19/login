import React, { useState } from 'react';
import api from '../../../services/api';

export default function Recovery() {

    const [ emailUser, setEmailUser ] = useState('');
    const [ nameUser, setNameUser ] = useState('');
    const [ passwordUser, setPasswordUser ] = useState('');

    async function recovery(event) {

        event.preventDefault();

        const response = await api.put('/login/recovery', {
            emailUser,
            nameUser,
            passwordUser
        });

        if (response) {
            alert('Changed record');
        } 
    }

    return (
        <div className = "container"> 
            <div className = "box"> 
                <h3> Account recovery </h3>
                <form onSubmit = { recovery } > 
                    <input type = "email" placeholder = "E-mail in use" onChange = { function(event) {
                        setEmailUser(event.target.value);
                    }} />
                    <input type="text" placeholder="New username" onChange={function (event) {
                        setNameUser(event.target.value);
                    }} />
                    <input type="password" placeholder="New password" onChange={function (event) {
                        setPasswordUser(event.target.value);
                    }} />
                    <button type = "submit"> Recover </button>
                </form>
            </div>
        </div>
    );
}