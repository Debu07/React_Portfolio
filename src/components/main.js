import React from 'react'
import { Switch, Route } from 'react-router-dom'
import landingpage from './landingpage'
import resume from './resume'
import links from './links'
import projects from'./project'
import contact from './contact'
import aboutme from './skills'
import achievements from './achievements'

export default function main() {
    return (
        <Switch>
            <Route exact path="/" component={landingpage}/>
            <Route path ="/resume" component={resume}/>
            <Route path ="/links" component={links}/>
            <Route path ="/projects" component={projects}/>
            <Route path ="/contact" component={contact}/>
            <Route path ="/aboutme" component={aboutme}/>
            <Route path ="/achievements" component={achievements}/>
        </Switch>
    )
}
