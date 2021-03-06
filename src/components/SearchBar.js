import React from 'react';

export default ({ term, data, update }) => {
    const dataSearch = event => {
        const value = event.target.value.toLowerCase();
        const filter = data.filter(user => {
            return user.name.toLowerCase().includes(value);
        });

        update({
            data: filter,
            active: 0,
            term: value
        });
    };
    return (
        <div className="search-bar form-group">
            <input
                value={term}
                type="text"
                className="form-control"
                placeholder="Search people by name..."
                onChange={dataSearch}
            />
        </div>
    );
};