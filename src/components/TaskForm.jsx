import React, {useState} from 'react';

const TaskForm = (props) => {
    // FOR FORM INPUT
    const [task, setTask] = useState("");

    // FORM ONSUBMIT FUNCTION TO ADD NEW TASKS
    const createTask = (t) => {
        t.preventDefault();

        // CALL ON ADDTASKS FUNCTION (SEE APP.JS)
        props.addTasks(task);

        // RESET INPUT FIELDS:
        setTask("");
    }

    return (
        <div>
            <hr />
            <form onSubmit={t => createTask(t)}>
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