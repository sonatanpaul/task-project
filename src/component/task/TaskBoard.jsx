import { useState } from "react";
import AddTaskModal from "./AddTaskModal";
import SearchTask from "./SearchTask";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";

export default function TaskBoard() {
  const defaultTaskList = {
    id: crypto.randomUUID(),
    title: "Learn React",
    description:
      "Learn React such than can treat it like my slave and make it do whatever i want to do",
    tags: ["web", "react", "javascript"],
    priority: "High",
    isFavorite: false,
  };
  const [tasks, setTasks] = useState([defaultTaskList]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  function handleAddEditClick(newTask, isAdd) {
    event.preventDefault();
    if (isAdd) {
      setTasks([...tasks, newTask]);
    } else {
      setTasks(
        tasks.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          }
          return task;
        })
      );
    }
    setShowAddModal(false);
  }

  function handleEditTask(task) {
    setTaskToUpdate(task);
    setShowAddModal(true);
  }

  function handleCloseClick() {
    setShowAddModal(false);
    setTaskToUpdate(null);
  }

  function handleDeleteTask(taskId) {
    const taskToDelete = tasks.filter((task) => task.id !== taskId);
    setTasks(taskToDelete);
  }

  function handleDeleteAllTask() {
    tasks.length = 0;
    setTasks([...tasks]);
  }

  return (
    <>
      <section className="mb-20" id="tasks">
        {showAddModal && (
          <AddTaskModal
            onSave={handleAddEditClick}
            onCloseClick={handleCloseClick}
            taskUpdate={taskToUpdate}
          />
        )}
        <div className="container">
          <div className="p-2 flex justify-end">
            <SearchTask />
          </div>
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TaskActions
              onAddClick={() => setShowAddModal(true)}
              onDeleteAllTask={handleDeleteAllTask}
            />
            <TaskList
              tasks={tasks}
              onEdit={handleEditTask}
              onDelete={handleDeleteTask}
            />
          </div>
        </div>
      </section>
    </>
  );
}
