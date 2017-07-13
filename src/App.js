import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './Input';
import List from './List';
import Appbar from 'muicss/lib/react/appbar';
import Container from 'muicss/lib/react/container';

const randomColor = () => '#' + Math.random().toString(16).substr(-6);

class App extends Component {
  state = {
    color: 'skyblue',
    todoList: []
  };
  randomizeColor = () => this.setState({ color: randomColor() });

  componentDidMount() {
    fetch('http://localhost:3100/tasks')
      .then(response => {
        return response.json();
      })
      .then(json => {
        this.setState({ todoList: json });
      });
  }

  onAddTodo = value => {
    fetch('http://localhost:3100/tasks', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: value,
        status: 'pending'
      })
    }).then(res => {
      this.componentDidMount();
    });
  };
  onRemoveTodo = (id, index) => {
    const { todoList } = this.state;
    fetch('http://localhost:3100/tasks/delete/' + id, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(res => {
      this.setState({
        todoList: todoList.filter((todo, i) => i !== index)
      });
    });
  };
  render() {
    const { color, todoList } = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Todo React App</h2>
        </div>
        <p className="App-intro">
          <Container>
            <Input onSubmit={this.onAddTodo} />
            <List data={todoList} onClickItem={this.onRemoveTodo} />
          </Container>
        </p>
      </div>
    );
  }
}

export default App;
