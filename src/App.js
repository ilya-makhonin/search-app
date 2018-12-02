import React, { Component } from 'react';
import './App.css';
import load from './utils/load';
import UserList from './components/UserList';


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
            <div className="App">
                <UserList update={this.updateData} data={this.state.data}/>
            </div>
        );
    }
}

export default App;
