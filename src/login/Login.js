import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Header, Grid, Button, Form, Message } from 'semantic-ui-react';

import API, { handleError } from '../helpers/API';
import Auth from '../helpers/Authenticate';

export class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            authenticated: Auth.isAuthenticated(),
            error: false,
            errorMessage: null,
        }
    }

    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({ [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            username: this.state.username,
            password: this.state.password,
        };

        API.post("/accounts/authenticate", data)
            .then(response => {
                Auth.authenticate(response.data.token);
                this.setState({ authenticated: true });
            })
            .catch(error => {
                this.setState({
                    error: true,
                    errorMessage: handleError(error),
                });
            });
    };

    render() {
        const { authenticated, error, errorMessage } = this.state;
        const { from } = this.props.location.state || { from: { pathname: '/' } }

        if (authenticated)
            return (<Redirect push to={from} />);

        return (
            <Grid.Column width={10}>
                <Header as="h1" textAlign="center">Log in to continue</Header>

                {error && <Message warning content={errorMessage} />}

                <Form onSubmit={this.handleSubmit}>
                    <Form.Input name="username" label="Username" type="text" onChange={this.handleChange} />
                    <Form.Input name="password" label="Password" type="password" onChange={this.handleChange} />
                    <Button fluid primary type="submit">Log in</Button>
                </Form>
            </Grid.Column>
        );
    }
}