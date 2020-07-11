import React, { Component } from 'react'
import { Grid, Cell ,ProgressBar } from 'react-mdl'

export class Skills extends Component {
    render() {
        return (
            <Grid>
                <Cell col={12}>
                    <div style={{display:'flex' , padding:'2rem'}}>
                        {this.props.skill}
                        <ProgressBar style={{marginLeft:'auto', width:'75%'}} 
                                     progress={this.props.progress} 
                                     />

                    </div>
                </Cell>

            </Grid>

            )
    }
}

export default Skills
