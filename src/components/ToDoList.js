import React, { Component } from 'react';
import { ToDo } from "./ToDo";

export class ToDoList extends Component{
    render(){
        const items = this.props.toDos.map((toDo) => {
            return (
                <ToDo 
                    toDo={toDo} 
                    key={toDo.id} 
                    removeToDo={this.props.removeToDo}
                />
            )
        });
        
        return (
            <ul>{items}</ul>
        );
    }
}