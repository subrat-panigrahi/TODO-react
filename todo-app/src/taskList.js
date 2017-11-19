import React, { Component } from 'react';

class TaskList extends Component {


    render(){
        console.log("task" + this.props.pendingTasks);
        //const tasks = [];
        let tasks = this.props.pendingTasks.map(task =>
        <div>
            <input
                name="isGoing"
                type="checkbox"
                value = {task}
            />
            <label>{task}</label>
        </div>

        );

        return (<div>

            {tasks}

        </div>);
    }
}


export default TaskList;