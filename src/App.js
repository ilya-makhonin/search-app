import React, { Component } from 'react';
import UserList from './components/UserList';
import ActiveUser from './components/ActiveUser';
import SearchBar from './components/SearchBar';
import ToolBar from './components/ToolBar';
import axios from 'axios';


class App extends Component {
    state = {
        data: null,
        term: '',
        active: 0
    };
    url = 'http://jsonplaceholder.typicode.com/users';
    initialData = [];

    loadData = () => {
        axios(this.url)
            .then(usersJson => {
                const users = (usersJson.data).map(item => {
                    return {
                        id: item.id,
                        name: item.name,
                        phone: item.phone,
                        email: item.email
                    };
                });
                this.initialData = users;
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
                    <div className="col-sm-12">
                        <SearchBar
                            term={this.state.term}
                            data={this.initialData}
                            update={this.updateData}
                        />
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-sm-12">
                        <ToolBar
                            initialData={this.initialData}
                            data={this.state.data}
                            update={this.updateData}
                        />
                    </div>
                </div>
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
