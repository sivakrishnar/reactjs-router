import { Component } from "react";
import React from "react";
import Table from "./Table";

export default class Points extends Component {
    render() {
        return(
            <Table sortedBy="points" />
        )
    }
}