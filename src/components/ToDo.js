import React, { Component } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export class ToDo extends Component{
    render(){
        return (
            <ListItem button onClick={() => this.props.removeToDo(this.props.toDo.id)}>
                <ListItemText primary={this.props.toDo.text} />
            </ListItem>
        );
    }
}