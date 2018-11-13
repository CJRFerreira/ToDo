import React, { Component } from 'react';

export class ToDoForm extends Component {
    render() {
        return (
            <div>
                <input
                    name='addToDo'
                    value={this.props.toDo}
                    onChange={(event) => this.props.isFieldEmpty(event)}
                />
                <button
                    type='button'
                    disabled={!this.props.isValid}
                    onClick={() => this.props.addToDo(this.props.toDo)}
                >
                    Add
                </button>
            </div>
        );
    }
}