import React, { Component } from 'react';
import { Title } from './components/Title';
import { ToDoList } from './components/ToDoList';
import { ToDoForm } from './components/ToDoForm';
import './App.css';

class App extends Component {
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

  markFieldInvalid = () => {
    this.setState(() => {
      return {
        isValid: false
      };
    });
  }

  markFieldValid = () => {
    this.setState(() => {
      return {
        isValid: true
      };
    });
  }

  isFieldEmpty = (event) => {
    const eventValue = event.target.value;

    this.setState(() => {
      return {
        toDo: eventValue
      };
    });

    (!eventValue || eventValue.length === 0) ? this.markFieldInvalid() : this.markFieldValid();
  }

  render() {
    return (
      <div>
        <div className='App-header'>
          <Title />
        </div>
        <div className='App-form'>
          <ToDoForm
            addToDo={this.addToDo}
            isFieldEmpty={this.isFieldEmpty}
            toDo={this.state.toDo}
            isValid={this.state.isValid}
          />
        </div>
        <div className='App-list'>
          <ToDoList
            toDos={this.state.data}
            removeToDo={this.removeToDo}
          />
        </div>
      </div>
    );
  }
}

export default App;