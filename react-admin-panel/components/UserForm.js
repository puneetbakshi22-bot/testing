import React, { useState } from 'react';

const UserForm = ({ addUser }) => {
    const [user, setUser] = useState({ name: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        addUser(user);
        setUser({ name: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={user.name}
                onChange={(e) => setUser({ name: e.target.value })}
                placeholder="Enter user name"
                required
            />
            <button type="submit">Add User</button>
        </form>
    );
};

export default UserForm;