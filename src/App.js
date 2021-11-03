import './App.css';
import {useState} from 'react';

import TaskView from './components/TaskView'
import TaskForm from './components/TaskForm'

function App() {
  // CREATE EMPTY LIST OF TASKS
  // INITIALLY PREPOPULATE LIST FOR TESTING
  const [taskList, setTaskList] = useState(
    []
  )

  // TO CREATE NEW TASKLIST, ADD NEW TASK ITEM, UPDATE STATE
  const addTasks = (newTask) => {
    // BELOW IS DONE ELSEWHERE? 
    // // CREATE TASK OBJECT, INSTEAD OF STRING
    // const taskItem = {
    //   text: newTask, 
    //   complete: false
    // }
    // console.log(taskItem)

    // UPDATESTATE([COPY & SPREAD TASKLIST IN STATE, ADD NEWTASK])
    setTaskList([...taskList, newTask]);
  }

  // FUNCTION TO CHANGE CHECKED
  const changeChecked = (checkIdx) => {
    console.log("idx to check", checkIdx)
    const newTaskList = [...taskList];
    newTaskList[checkIdx].status = !newTaskList[checkIdx].status;
    setTaskList(newTaskList);
  }

  // FUNCTION TO DELETE TASK
  const taskDelete = (delIdx) => {
    const filteredTasks = taskList.filter((task, idx) => {
      // TEST TO SEE IF IT MATTERS WHICH ORDER THESE ARE IN... IDX DELIDX or DELIDX IDX
        return delIdx !== idx;
    });
    setTaskList(filteredTasks);
  }

  return (
    <div className="App">
      {JSON.stringify(taskList)}
      <h4>Add a new task!</h4>
      <TaskForm addTasks={addTasks}/>
      <TaskView taskList={taskList} taskDelete={taskDelete} changeChecked={changeChecked} />
    </div>
  );
}

export default App;
