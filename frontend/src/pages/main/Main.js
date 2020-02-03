import React, { useState, useEffect } from 'react';
import api from '../../services/api';

export default function Main({ match }) {

    const [ nameUser, setNameUser ] = useState('');

    useEffect(function() {
        async function loadUser() {
            const response = await api.get('/user/' + match.params.idUser );
            setNameUser(response.data[0].nameUser);
        }

        loadUser();
    }, [match.params.idUser]);

    return (
        <div className = "container">
            <div className = "box"> 
                <h3> Welcome { nameUser } </h3>
            </div>
        </div>
    );
}