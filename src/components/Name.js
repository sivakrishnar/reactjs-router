import { Component } from "react";
import React from "react";
import Table from "./Table";

export default class Name extends Component {
    render() {
        return(
            <Table sortedBy='name' />
        )
    }
}