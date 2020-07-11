import React from 'react'
import { Grid, Cell,List,ListItem,ListItemContent, Button} from 'react-mdl'

export default function contact() {
    return (
        <div className="contact-body">
            <Grid className="contact-grid">
                <Cell col={6}>
                    <h1>Vedant Mehta</h1>
                    <img 
                    src="https://media.haircutinspiration.com/photos/20181204020742/Brad-Pitt-Slicked-Back-Undercut-e1538973872787.jpg"
                    alt=""
                    style={{ height:'250px'}}/>
                    <p style={{color:'black' ,width:"75%" , margin:'auto',paddingTop:'1em' ,fontSize:'25px'}}>                        
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Nemo nostru explicabo labore perferendis aut quaerate.
                    </p>
                    <div className="contact-list">
                    <List>
                    <ListItem>
                        <ListItemContent style={{fontSize:'25px', fontfamily:'Anton'}}>
                            <i className="fa fa-phone-square"></i>
                            +918800755121
                            </ListItemContent>
                    </ListItem>
                    <ListItem>
                    <ListItemContent style={{fontSize:'25px', fontfamily:'Anton'}}>
                            <i className="fa fa-envelope-o"></i>
                            mehtavedant7498@gmail.com
                            </ListItemContent>
                    </ListItem>
                    </List>
                    </div>

                </Cell>
                <Cell className="contact-me" col={6}>
                    <h1> Contact Me </h1>
                    <hr/>
                    <h2> Contact Form</h2>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis deleniti accusantium 
                    laboriosam, numquam repellat quasi facilis ea aspernatur, nostrum perferendis vero magni deserunt sunt minus nihil? Praesentium consectetur enim maiores!</p>
                    <Button className="send-message"> Send Message</Button>
                </Cell>
            </Grid>
        </div>
    )
}