'use strict';
import React, { Component } from "react";
import PropTypes from 'prop-types';

import User from "./User";

export default class Users extends Component(
    static get propTypes(){
        return{
            users: PropTypes.array
        }
    }

    constructor(props){
        super(props);
    },
    render(){
        const {users} = this.props;
        return 
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>

                </tbody>

            </table>
        <div>;

    }

);