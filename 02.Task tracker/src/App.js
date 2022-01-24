import "./App.css";
import Header from "./components/Header";
import TasksList from "./components/TasksList";
import { useState } from "react";
import { initialState } from "./store/initialState";
import CreateTask from "./components/CreateTask";

function App() {
  const [tasks, setTasks] = useState(initialState);
  const [isTaskBarVisible, setIsTaskBarVisible] = useState(false);

  // Create a task
  const onCreate = (task) => {
    const id = Date.now();
    const newTask = { id, ...task };
    setTasks((prevState) => [...prevState, newTask]);
  };

  // Delete a task
  const onDelete = (deletedItemID) =>
    setTasks(tasks.filter((task) => task.id !== deletedItemID));

  // Toggle Done
  const toggleDone = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
  };

  // Toggle Show and Hide
  const toggleShow = () => setIsTaskBarVisible((prevState) => !prevState);

  return (
    <div className="container">
      <Header
        title={"Task Tracker"}
        toggleShow={toggleShow}
        isTaskBarVisible={isTaskBarVisible}
      />
      {isTaskBarVisible && <CreateTask onCreate={onCreate} />}
      {tasks.length > 0 ? (
        <TasksList tasks={tasks} onDelete={onDelete} toggleDone={toggleDone} />
      ) : (
        <p>No Task to show</p>
      )}
    </div>
  );
}

export default App;
