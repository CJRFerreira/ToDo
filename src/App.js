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

    this.setState(() => {
      return {
        toDoCounter: toDoId
      };
    });

    const toDo = {
      text: value,
      id: toDoId
    };

    let temp = this.state.data.slice(0);

    temp.push(toDo);

    this.setState(() => {
      return {
        data: temp
      };
    });

    this.setState((state) => {
      return {
        toDo: '',
        isValid: !state.isValid
      };
    });
  }

  removeToDo = (id) => {
    const remainder = this.state.data.filter((todo) => todo.id !== id);

    if (remainder.length === 0) {
      this.setState(() => {
        return {
          toDoCounter: 0
        };
      });
    }

    this.setState(() => {
      return {
        data: remainder
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

    if (!eventValue || eventValue.length === 0) {
      this.setState(() => {
        return {
          isValid: false
        };
      });
    }
    else {
      this.setState(() => {
        return {
          isValid: true
        };
      });
    }
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