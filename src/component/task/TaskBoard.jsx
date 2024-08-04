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
  const [showAddMoadal, setShowAddMoadal] = useState(false);

  function handleAddTask() {
    setShowAddMoadal(true);
  }

  return (
    <>
      <section className="mb-20" id="tasks">
        {showAddMoadal && <AddTaskModal />}
        <div className="container">
          <div className="p-2 flex justify-end">
            <SearchTask />
          </div>
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TaskActions onAddClick={handleAddTask} />
            <TaskList tasks={tasks} />
          </div>
        </div>
      </section>
    </>
  );
}
