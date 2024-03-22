import { Component } from 'react'
import React from 'react'
import Table from './Table'

export default class Age extends Component {
    render() {
        return(
              <Table sortedBy='age' />
        )
    }
}