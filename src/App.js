import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import load from './utils/load';
import UserList from './components/UserList';
import ActiveUser from './components/ActiveUser';


class App extends Component {
    state = {
        data: null,
        term: '',
        active: 0
    };
    url = 'https://jsonplaceholder.typicode.com/users';

    loadData = () => {
        load(this.url)
            .then(usersJson => {
                const users = (JSON.parse(usersJson)).map(item => {
                    return {
                        id: item.id,
                        name: item.name,
                        phone: item.phone,
                        email: item.email
                    };
                });
                this.setState({ data: users });
            })
            .catch(error => {
                console.log(error);
            });
    };

    updateData = (config) => {
        this.setState(config);
    };

    componentDidMount() {
        this.loadData();
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-4 col-md-3 col-lg-3">
                        <ActiveUser data={this.state.data} active={this.state.active} />
                    </div>
                    <div className="col-sm-8 col-md-9 col-lg-9">
                        <UserList data={this.state.data} update={this.updateData} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
