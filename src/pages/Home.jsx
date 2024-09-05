import { useEffect, useState } from 'react';
import { getUsers } from '../services/api'

function Home() {
    const [ users, setUsers ] = useState([]);

    useEffect(() => {
        getUsers().then(data => setUsers(data));
    }, []);

    return (
        <div>
            <h1>Users List</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    )
}
export default Home