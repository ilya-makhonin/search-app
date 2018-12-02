import React from 'react';

export default ({ data, active }) => {
    if (!data || !data[active]) {
        return <h3>Nothing found!</h3>;
    }
    const user = data[active];
    return (
        <div className="thumbnail">
            <div className="thumbnail-caption">
                <h3>{user.name}</h3>
                <table className="user-info table table-responsive">
                    <tbody>
                    <tr>
                        <td>Email:</td>
                        <td>{user.email}</td>
                    </tr>
                    <tr>
                        <td>Phone:</td>
                        <td>8 {user.phone}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};