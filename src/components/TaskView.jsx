import React from 'react'
import {useState} from 'react'

// COMPONENT TO VIEW LIST OF TASKS
const TaskView = (props) => {
    // VAR TO SET CHECKED
    const [checked, setChecked] = useState(false);

    // FUNCTION TO CHANGE CHECKED
    const changeChecked = () => {
        setChecked(!checked);
    }

// USE MAP TO DISPLAY ALL ITEMS IN TASKLIST
    return (
        <div>
            <hr/>
            <h4>Your tasks:</h4>
            {
                props.taskList.map((task, idx) => {
                    return (
                        <li key={idx}>
                            {task}
                            <input type="checkbox" 
                            checked={checked}
                            onChange={changeChecked}/>
                        </li>
                    )
                })
            }
            <p>Is {props.taskList.task} checked? {checked.toString()}</p>
        </div>
    )
}

export default TaskView

// *************WORKING NOTES****************
// ADDED LINES 6-12
// ADDED LINES 24-26
// ADDED LINES 31-32
// SEE ROBINEWIERUCK.DE/REACT-CHECKBOX ???