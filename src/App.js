import './App.css';
import {useState} from 'react';

import TaskView from './components/TaskView'

function App() {
  // CREATE EMPTY LIST OF TASKS
  // INITIALLY PREPOPULATE LIST FOR TESTING
  const [taskList, setTaskList] = useState(
    ([
      "Eat a whole bag of puppy chow",
      "Drink five cups of coffee",
      "Try to complete homework assignment",
      "Do the reading",
      "Bang head against desk",
      "Repeat"
    ])

  )

  // TO CREATE NEW TASKLIST, ADD NEW TASK ITEM, UPDATE STATE
  const addTasks = (newTask) => {
    // UPDATESTATE([COPY & SPREAD TASKLIST IN STATE, ADD NEWTASK])
    setTaskList([...taskList, newTask]);
  }

  return (
    <div className="App">
      <h4>Add a new task!</h4>
      <TaskView taskList={taskList}/>
    </div>
  );
}

export default App;
