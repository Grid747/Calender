import Task from "./Task";

/* you do array map on the dummy data you already have and from there you "Task" should be able to
    the template that is going to be filled everytime look at dataBox for the 'Task' */

const Tasks = function ({ tasks, onDelete, onToggle }) {
  return (
    <>
      {tasks.map(function (task) {
        return (
          <Task
            key={task.id}
            task={task}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        );
      })}
    </>
  );
};

export default Tasks;
