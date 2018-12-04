import React from 'react';
import UserData from './UserData';


export default ({ data, update }) => {
    return (
        <table className="user-list table table-bordered">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>email</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                {
                    !data ? <tr><td><p>Loading...</p></td></tr> :
                    data.map((user, index) => {
                        return (<UserData
                            user={user}
                            index={index}
                            update={update}
                            key={index}
                        />);
                })}
            </tbody>
        </table>
    );
};