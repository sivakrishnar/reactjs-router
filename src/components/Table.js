import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Users } from "../data"

export default class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: Users['list'].sort((a,b) => a[props.sortedBy] > b[props.sortedBy] ? 1 : -1)
        }
    }

    render() {
        return(
            <div>
            <Link to="/age">
              <button class="btn btn-primary">Age</button>
            </Link>
            <Link to="/rank">
              <button class="btn btn-primary">Rank</button>
            </Link>            
            <Link to="/points">
              <button class="btn btn-primary">Points</button>
            </Link>            
            <Link to="/name">
              <button class="btn btn-primary">Name</button>
            </Link>
            <table class="table table-condensed table-striped">
              <thead>
                <tr>
                  <td>Rank</td>
                  <td>Name</td>
                  <td>Age</td>
                  <td>Points</td>
                </tr>
              </thead>
              <tbody>
                {this.state.users.map((user) => (
                  <tr>
                    <td>{user.rank}</td>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                    <td>{user.points}</td>
                  </tr>
                ))}

              </tbody>
            </table>
            </div>
        )
    }
}