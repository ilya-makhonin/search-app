import React from 'react';

export default ({ user, update, index }) => {
    return (
        <tr onClick={() => update({ active: index })}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>8 {user.phone}</td>
        </tr>
    );
};