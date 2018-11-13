import React, { Component } from 'react';

export class ToDo extends Component{
    render(){
        return (
            <li onClick={() => this.props.removeToDo(this.props.toDo.id)}>
                {this.props.toDo.text}
            </li>
        );
    }
}