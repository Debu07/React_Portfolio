import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'

export class landingpage extends Component {
    render() {
        return (
            <div style={{width:"100%", margin:"auto"}}>
                <Grid className="landing-grid">
                    <Cell col={12}> 
                    <img
                    src="https://img2.pngio.com/avatar-png-icon-picture-400954-avatar-png-icon-user-avatars-png-512_506.png"
                    alt="logo"
                    className="avatar-img"
                    />

                    <div className="banner-text">
                        <h1> Full Stack Web Developer</h1>
                        <hr/>
                        <p>
                            HTML | CSS | Bootstrap | JavaScript | React | Express | NodeJS | Python | Django
                        </p>
                        <div className="social-links">
                            {/* github */}
                            <a href="https://github.com/Debu07" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-github-square" aria-hidden="true"></i>
                            </a>
                            {/* linkedin */}
                            <a href="https://github.com/Debu07" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                            </a>
                            {/* youtube */}
                            <a href="https://github.com/Debu07" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-youtube-square" aria-hidden="true"></i>
                            </a>
                            {/* youtube */}
                            <a href="https://github.com/Debu07" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-code" aria-hidden="true"></i>
                            </a>
                            
                        </div>
                    </div>
                    

                    </Cell>
                </Grid>               
            </div>
        )
    }
}

export default landingpage
