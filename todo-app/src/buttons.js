import React, { Component } from 'react';

class ButtonGroup extends Component {
    render(){
        return (<div>
            <button className="btn btn-primary"
            >Mark ad complete</button>
            <button className="btn btn-primary"
            >Delete</button>
            <button className="btn btn-primary"
            >Edit</button>
        </div>);
    }
}


export default ButtonGroup;