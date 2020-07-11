import React, { Component } from 'react'
import { Tabs, Tab, Grid, Cell, Card,CardTitle,CardText,CardActions,
             Button,CardMenu } from 'react-mdl';

export class project extends Component {
    constructor(props){
        super(props);
        this.state= { activeTab:0 };
    }
    toggleCategories(){
        if(this.state.activeTab===0){
            return(
                <div className="projects-grid">
                    {/* project 1 */}
                    <Card shadow={0} style={{minwidth: '450px', margin: 'auto'}}>
                    <CardTitle className="card-image">project React #1</CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris sagittis pellentesque lacus eleifend lacinia...
                    </CardText>
                    <CardActions border>
                        <Button colored>View Code</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                    </CardMenu>
                    </Card>
                    {/* project 2 */}
                    <Card shadow={0} style={{minwidth: '450px', margin: 'auto'}}>
                    <CardTitle className="card-image">project React #1</CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris sagittis pellentesque lacus eleifend lacinia...
                    </CardText>
                    <CardActions border>
                        <Button colored>View Code</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                    </CardMenu>
                    </Card>
                    
                </div>
            )
        }
        else if (this.state.activeTab===1) {
            return(
                <div>
                    <h1> this is react</h1>
                </div>
            )
        }
        else if (this.state.activeTab===2) {
            return(
                <div>
                    <h1> this is Django </h1>
                </div>
            )
        }
        else{
            return(
                <div>
                    <h1> this is express </h1>
                </div>
            )

        }
    }

    render() {
        
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId)=>
                {this.setState({activeTab:tabId})}} ripple>
                    <Tab> Front End</Tab>
                    <Tab> React</Tab>
                    <Tab> Django</Tab>
                    <Tab> MongoDB</Tab>                    
                </Tabs>
                
                    <Grid>
                        <Cell col={12}>
                        {this.toggleCategories()}
                        </Cell>
                    </Grid>            
            </div>  
        );  
    }
}

export default project
