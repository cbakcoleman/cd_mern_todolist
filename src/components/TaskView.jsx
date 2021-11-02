import React from 'react'
// COMPONENT TO VIEW LIST OF TASKS
const TaskView = (props) => {
// USE MAP TO DISPLAY ALL ITEMS IN TASKLIST
    return (
        <div>
            <hr/>
            <h4>Your tasks:</h4>
            {
                props.taskList.map((task, idx) => {
                    return <li key={idx}>{task}</li>
                })
            }
        </div>
    )
}

export default TaskView