import React, { Component } from 'react';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import { ToDo } from "./ToDo";

export class ToDoList extends Component {
    render() {
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
            <Paper elevation={1}>
                <List>
                    {!items ? "Enter a To Do in the box above!" : items}
                </List>
            </Paper>

        );
    }
}