import TaskItem from "./TaskItem";

export default function TasksList({ tasks, onDelete, toggleDone }) {
  return (
    <div>
      {tasks.map((task) => {
        return (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={onDelete}
            toggleDone={toggleDone}
          />
        );
      })}
    </div>
  );
}
