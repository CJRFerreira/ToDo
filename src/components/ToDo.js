import React, { Component } from 'react';
import { Title } from './Title';
import { ToDoList } from './ToDo/ToDoList';
import { ToDoForm } from './ToDo/ToDoForm';
import Grid from '@material-ui/core/Grid';
import '../App.css';

class ToDo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            toDoCounter: 0,
            toDo: '',
            isValid: false
        };
    }

    addToDo = (value) => {
        let toDoId = this.state.toDoCounter + 1;

        const toDo = {
            text: value,
            id: toDoId
        };

        this.setState((state) => {
            let temp = state.data.slice(0);

            temp.push(toDo);

            return {
                data: temp,
                toDoCounter: toDoId,
                toDo: '',
                isValid: !state.isValid
            };
        });
    }

    removeToDo = (id) => {
        const remainder = this.state.data.filter((todo) => todo.id !== id);

        let counter;
        remainder.length === 0 ? counter = 0 : counter = this.state.toDoCounter;

        this.setState(() => {
            return {
                data: remainder,
                toDoCounter: counter
            };
        });
    }

    isFieldEmpty = (event) => {
        const eventValue = event.target.value;

        this.setState(() => {
            return {
                toDo: eventValue,
                isValid: (eventValue && eventValue.length > 0)
            };
        });
    }

    render() {
        return (
            <div>
                <Grid container spacing={16}>
                    <Grid item xs={12}>
                        <div className='App-header'>
                            <Title title="To Do" />
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div className='App-form'>
                            <ToDoForm
                                addToDo={this.addToDo}
                                isFieldEmpty={this.isFieldEmpty}
                                toDo={this.state.toDo}
                                isValid={this.state.isValid}
                            />
                        </div>
                    </Grid>
                    <Grid justify="center" alignItems="center" container>
                        <div className='App-list'>
                            <ToDoList
                                toDos={this.state.data}
                                removeToDo={this.removeToDo}
                            />
                        </div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default ToDo;