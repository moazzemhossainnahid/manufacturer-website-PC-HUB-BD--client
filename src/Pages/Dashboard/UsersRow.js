import React from 'react';
import { toast } from 'react-toastify';

const UsersRow = ({user, refetch, index}) => {
    const {email, role} = user;

    const makeAdmin = () => {
        fetch(`https://pc-hub-bd.herokuapp.com/user/admin/${email}`, {
            method: "PUT",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
        .then(res => {
            if(res.status === 403){
                toast.error("Failed to Make an Admin")
            }
            return res.json()
        })
        .then(data => {
            if(data.modifiedCount > 0){
                refetch();
                toast.success("Successfully Make an Admin");
            }
        })
    }

    const deleteUser = () => {
        fetch(`https://pc-hub-bd.herokuapp.com/user/removeadmin/${email}`, {
            method: "PUT",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
        .then(res => res.json())
        .then(data => {
            refetch();
            toast.success("Successfully Removed an Admin");
        })
    }


    return (
            <tr>
                <th>{index + 1}</th>
                <td>{email}</td>
                <td>{role === 'admin' ? <div class="badge badge-secondary badge-outline">Admin</div> : <button onClick={makeAdmin} class="btn btn-xs btn-outline">Make Admin</button> }</td>
                <td>{role === 'admin' && <button onClick={deleteUser} class="btn btn-xs btn-outline">Remove Admin</button>}</td>
            </tr>
    );
};

export default UsersRow;