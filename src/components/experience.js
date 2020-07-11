import React, { Component } from 'react'
import {Grid , Cell} from 'react-mdl'
export class Experience extends Component {
    render() {
        return (
            <Grid  className="education-details">
                <Cell className="date" col={4}>
            <h4>{this.props.startYear} - {this.props.endYear} </h4>
                </Cell>
            
                <Cell col={8}>
                <h3 style={{marginTop: "8px"}}>{this.props.expName}</h3>
                <p>{this.props.expDescription}</p>
                </Cell>
    
            </Grid>
            )
    }
}

export default Experience
