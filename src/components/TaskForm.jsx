import React, {useState} from 'react';

const TaskForm = (props) => {
    // FOR FORM INPUT
    const [task, setTask] = useState("");

    // FORM ONSUBMIT FUNCTION TO ADD NEW TASKS
    const createTask = (t) => {
        t.preventDefault();
        // CREATE TASK AS OBJECT W/DEFAULT BOOLEAN
        // VALUE FOR COMPLETE
        const myNewTask = {
            text: task,
            status: false
        }

        // CALL ON ADDTASKS FUNCTION (SEE APP.JS)
        props.addTasks(myNewTask);

        // RESET INPUT FIELDS:
        setTask("");
    }

    return (
        <div>
            <hr />
            <form onSubmit={e=> createTask(e)}>
                <div>
                    <label>Task: </label>
                    <input 
                        type="text" 
                        onChange={ (e) => setTask(e.target.value)}
                        value={task}/>
                </div>
                <div>
                    <button>Add</button>
                </div>
            </form>
        </div>
    )
}

export default TaskForm;