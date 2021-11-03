import React from 'react'
import {useState} from 'react'
import './styles.css';

// COMPONENT TO VIEW LIST OF TASKS
const TaskView = ({taskList, taskDelete}) => {
    // DESTRUCTURING FUNCTIONS FROM APP.JS???
    // DON'T FORGET TO PASS THESE FUNCTIONS THROUGH ON APP.JS
     

// USE MAP TO DISPLAY ALL ITEMS IN TASKLIST
    return (
        <div>
            <hr/>
            <h4>Your tasks:</h4>
            {
                taskList.map((task, idx) => {
                    return (
                        <table>
                            <thead>
                                <tr>
                                    <th 
                                        class="tableColumn">
                                        Task
                                    </th>
                                    <th 
                                        class="tableColumn">
                                        Completed?
                                    </th>
                                    <th 
                                        class="tableColumn">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td key={idx}>{task}</td>
                                    <td>
                                        {/* <input type="checkbox"  checked={task} onChange={changeChecked}/> */}
                                    </td>
                                    <td>
                                        <button onClick={(e) => {
                                            taskDelete(idx);
                                        }}>Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    )
                })
            }
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