"use client"
import React, { useState } from 'react';


function UpdateForm() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('Lucia');
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome e Cognome:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Invia</button>
        </form>
    );
}

export default UpdateForm;
