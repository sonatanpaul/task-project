// eslint-disable-next-line react/prop-types
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function TaskActions({ onAddClick, onDeleteAllTask }) {
  const notify = () => toast("Delete All Task Successful!");

  return (
    <>
      <div className="mb-14 items-center justify-between sm:flex">
        <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
        <div className="flex items-center space-x-5">
          <button
            onClick={onAddClick}
            className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold"
          >
            Add Task
          </button>
          <div>
            <button
              onClick={onDeleteAllTask}
              className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold"
            >
              Delete All
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </>
  );
}
