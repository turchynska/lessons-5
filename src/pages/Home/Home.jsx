import { useEffect, useState } from 'react';
import { getUsers } from '../../services/api'
import styles from './Home.module.css'

function Home() {
    const [ users, setUsers ] = useState([]);

    useEffect(() => {
        getUsers().then(data => setUsers(data));
    }, []);

    return (
        <div>
            <h1 className={styles.titleUsers}>Users List</h1>
            <ul className={styles.listUsers}>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    )
}
export default Home