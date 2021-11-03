import React from 'react'
import { useState } from 'react'
import './styles.css';

// COMPONENT TO VIEW LIST OF TASKS
const TaskView = ({ taskList, taskDelete, changeChecked }) => {
    // DESTRUCTURING FUNCTIONS FROM APP.JS???
    // DON'T FORGET TO PASS THESE FUNCTIONS THROUGH ON APP.JS


    // USE MAP TO DISPLAY ALL ITEMS IN TASKLIST
    return (
        <div>
            <hr />
            <h4>Your tasks:</h4>
            <table>
                <thead>
                    <tr>
                        <th
                            className="tableColumn">
                            Task
                        </th>
                        <th
                            className="tableColumn">
                            Completed?
                        </th>
                        <th
                            className="tableColumn">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        taskList.map((task, idx) => {
                            return (
                                <tr>
                                    <td key={idx}>{task.text}</td>
                                    <td>
                                        <input type="checkbox" checked={task.status} onChange={() =>changeChecked(idx)} />
                                    </td>
                                    <td>
                                        <button onClick={(e) => {
                                            taskDelete(idx);
                                        }}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            {/* <p>Is {props.taskList.task} checked? {checked}</p> */}
        </div>
    )
}

export default TaskView

// *************WORKING NOTES****************
// ADDED LINES 6-12
// ADDED LINES 24-26
// ADDED LINES 31-32
// SEE ROBINEWIERUCK.DE/REACT-CHECKBOX ???
// RIGHT NOW CHANGING CHECKBOXES AS ONE, NOT INDIV