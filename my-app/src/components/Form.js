import React from 'react'
import '../styles/_form.css'
import {useState, useEffect } from 'react'
import { createUser, getAllUsers } from '../services/fetchAPI.js'

const Form = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const [users, setUsers] = useState();
    const [totalUsers, setTotalUsers] = useState(0);

    const handleSubmit = (e) =>{
        e.preventDefault();
        createUser({name, password}).then(response=>{
            console.log(response);
        });

        // handelList();

        // setName('');
        // setPassword('');
    }

    useEffect(() =>{
        getAllUsers().then(response => {
            console.log(response);
            setUsers(response);
            setTotalUsers(users.length);
        })
    });

    return (
        <section className='from_container'>
            <h3>Create new user</h3>
            <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label>Password</label>
                <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} autoComplete="true" />
            </div>
            <div>
                <button type="submit">Create</button>
            </div>
            </form>
            <div>
                <h3>List users</h3>
                {totalUsers > 0 &&
                <table>
                    <thead>
                        <tr>
                            <th>User Id</th>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{ user.id }</td>
                            <td>{ user.name }</td>
                            <td>{ user.password }</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                }
            </div>
        </section>
    )
}

export default Form