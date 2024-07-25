import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles.css';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch user data from the backend
    axios.get('/api/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the users!', error);
      });
  }, []);

  return (
    <div className="users">
      <h2>Users</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
