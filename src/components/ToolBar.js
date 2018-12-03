import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';

export default class ToolBar extends Component {
    sorted = { email: true, name: true };

    sort(type) {
        const { update, data } = this.props;
        const isSorted = this.sorted[type];
        let direction = isSorted ? 1 : -1;

        const sorted = [].slice.call(data).sort((a, b) => {
            if (a[type] === b[type]) return 0;
            return a[type] > b[type] ? direction : direction * -1;
        });

        this.sorted[type] = !isSorted;
        update({ data: sorted, active: 0 });
    }
    reset() {
        this.props.update({
            data: this.props.initialData,
            term: '',
            active: 0
        });
    }
    render() {
        return (
            <div className="toolbar">
                <button className="btn btn-default" onClick={() => this.sort('name')}>
                    <i className="fa fa-sort-alpha-asc"/>  Sort by name
                </button>
                <button className="btn btn-default" onClick={() => this.sort('email')}>
                    <i className="fa fa-sort-numeric-desc"/>  Sort by email
                </button>
                <button className="btn btn-danger" onClick={this.reset.bind(this)}>
                    <i className="fa fa-ban"/> Reset
                </button>
            </div>
        );
    }
}