import React from 'react';

const UsersRow = ({user}) => {
    const {email} = user;
    return (
            <tr>
                <th>1</th>
                <td>{email}</td>
                <td><button class="btn btn-xs btn-outline">Make Admin</button></td>
                <td><button class="btn btn-xs btn-outline">Remove User</button></td>
            </tr>
    );
};

export default UsersRow;