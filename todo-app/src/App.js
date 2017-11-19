import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonGroup from './buttons'
import taskJson from './tasks.json';
import TaskList from './taskList';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

class App extends Component {
  render() {
      console.log(taskJson.pending_tasks);
    return (
      <div className="App">
          <h1 className="App-title">My sticky notes</h1>

          <TaskList pendingTasks={taskJson.pending_tasks}/>
          <ButtonGroup/>

      </div>
    );
  }
}

export default App;
