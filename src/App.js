import React, { Component } from "react";
import Table from "./components/Table";
import { Routes, Route } from "react-router-dom"
import Age from "./components/Age"
import Name from "./components/Name"
import Rank from "./components/Rank"
import Points from "./components/Points"

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            sortedBy: ''
        }
    }

    render() {
        return(
            <div>
                <Routes>
                    <Route path="/age" Component={Age} />
                    <Route path="/name" Component={Name} />
                    <Route path="/rank" Component={Rank} />
                    <Route path="/points" Component={Points} />

                </Routes>
                <Table sortedBy={this.state.sortedBy}/>
            </div>
        )
    }
}