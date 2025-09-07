
import "./App.css";

import { TaskManager } from "./components/TaskManager";
import Test from "./components/Test";

function App() {
  return (
    <div className="h-screen flex-col items-top justify-center">
      <h1 className="text-4xl font-extrabold text-center">
        Simple task manager
      </h1>

      <TaskManager />
      <Test/>
    </div>
  );
}

export default App;
