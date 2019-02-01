import React, { Component } from 'react';
import { Menu, Icon, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import UserAction from '../shared/UserAction';

export class NavHeader extends Component {
    render() {
        return (
            <Menu inverted size="large">
                <Menu.Item header>
                    <Icon name="bolt" />
                    Car Rental Service
                </Menu.Item>
                <Menu.Item>
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Dropdown item text="Booking">
                    <Dropdown.Menu>
                        <Dropdown.Item as={Link} to="/create">Create new booking</Dropdown.Item>
                        <Dropdown.Item as={Link} to="/end">End booking</Dropdown.Item>
                        <Dropdown.Item as={Link} to="/bookings">All bookings</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Menu.Item>
                    <Link to="/customers">Customers</Link>
                </Menu.Item>
                <Menu.Menu position="right">
                    <Menu.Item>
                        <UserAction />
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        );
    }
}