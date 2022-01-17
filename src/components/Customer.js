import React, { Component } from 'react';
import {TableCell, TableRow} from '@material-ui/core';

class Customer extends Component {
    render() {
        return (
            <TableRow>
                <TableCell><img src={this.props.image} alt="profile" /></TableCell>
                <TableCell>{this.props.name}</TableCell>
                <TableCell>{this.props.birthday}</TableCell>
                <TableCell>{this.props.gender}</TableCell>
                <TableCell>{this.props.job}</TableCell>
            </TableRow>
        );
    }
}

export default Customer;