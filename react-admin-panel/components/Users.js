import React, { useState } from 'react';
import UserForm from './UserForm';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [editIdx, setEditIdx] = useState(-1);
    const [editName, setEditName] = useState('');

    const addUser = (user) => {
        setUsers([...users, user]);
    };

    const removeUser = (idx) => {
        setUsers(users.filter((_, i) => i !== idx));
    };

    const startEdit = (idx) => {
        setEditIdx(idx);
        setEditName(users[idx].name);
    };

    const saveEdit = () => {
        setUsers(users.map((user, i) => (i === editIdx ? { name: editName } : user)));
        setEditIdx(-1);
        setEditName('');
    };

    return (
        <div>
            <h1>Users List</h1>
            <UserForm addUser={addUser} />
            <ul>
                {users.map((user, idx) => (
                    <li key={idx}>
                        {editIdx === idx ? (
                            <> 
                                <input value={editName} onChange={e => setEditName(e.target.value)} />
                                <button onClick={saveEdit}>Save</button>
                                <button onClick={() => setEditIdx(-1)}>Cancel</button>
                            </>
                        ) : (
                            <> 
                                {user.name}
                                <button onClick={() => startEdit(idx)}>Edit</button>
                                <button onClick={() => removeUser(idx)}>Delete</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Users;