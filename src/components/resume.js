import React, { Component } from 'react'
import { Grid, Cell} from 'react-mdl'
import Education from './education'
import { Experience } from './experience'
import Skills from './skills'

export class resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                <Cell className="resume-col" col={6}>
                    <h1> Education </h1>
                    <Education 
                        startYear={2016}
                        endYear={'Present'}
                        about={'B.tech in CSE'}
                        schoolName={ 'Delhi Technical Campus'}
                        schoolDescription={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat nesciunt voluptatum vel at atque laborum perferendis, corporis ipsa explicabo obcaecati, nam rerum, doloribus temporibus a. Error, sint! Provident, dolores exercitationem.'}
                    />
                    <br/>
                    <Education className="education-details"
                        startYear={2014}
                        endYear={2015}
                        schoolName={ 'Ganga International School'}
                        schoolDescription={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat nesciunt voluptatum vel at atque laborum perferendis, corporis ipsa explicabo obcaecati, nam rerum, doloribus temporibus a. Error, sint! Provident, dolores exercitationem.'}
                    />
                    <hr style={{ borderTop:'3px solid red'}}></hr>
                    <h1> Experience </h1>

                    <Experience className="education-details"
                        startYear={2014}
                        endYear={2015}
                        expName={ 'Microsoft'}
                        expDescription={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat nesciunt voluptatum vel at atque laborum perferendis, corporis ipsa explicabo obcaecati, nam rerum, doloribus temporibus a. Error, sint! Provident, dolores exercitationem.'}
                    />
                    <Experience className="education-details"
                        startYear={2013}
                        endYear={2014}
                        expName={ 'Facebook'}
                        expDescription={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat nesciunt voluptatum vel at atque laborum perferendis, corporis ipsa explicabo obcaecati, nam rerum, doloribus temporibus a. Error, sint! Provident, dolores exercitationem.'}
                    />
                     <hr style={{ borderTop:'3px solid red'}}></hr>

                    <h1>Skills</h1>

                    <Skills skill='JavaScript' progress={90}/>
                    <Skills skill='React' progress={90}/>
                    <Skills skill='Python' progress={100}/>
                    <Skills skill='Django' progress={80}/>
                    <Skills skill='HTML' progress={100}/>
                    <Skills skill='CSS' progress={100}/>
                    
                </Cell>
                
                </Grid>
                
            </div>
        )
    }
}

export default resume
