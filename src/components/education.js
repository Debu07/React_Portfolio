import React, { Component } from 'react'
import { Cell ,Grid } from 'react-mdl'

export class Education extends Component {
    render() {
        return (
        <Grid  className="education-details">
            <Cell className="date" col={4}>
                <div>
        <h4>{this.props.startYear} - {this.props.endYear} </h4>
        </div>
            </Cell>
        
            <Cell col={8}> <div>
            <h3 style={{marginTop: "8px"}}>{this.props.schoolName}</h3>
            <p>{this.props.schoolDescription}</p>
            </div>
            </Cell>

        </Grid>
        )
    }
}

export default Education
