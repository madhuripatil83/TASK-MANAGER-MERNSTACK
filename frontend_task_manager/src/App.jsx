import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { TaskManager } from "./components/TaskManager";

function App() {
  return (
    <div className="h-screen flex-col items-top justify-center">
      <h1 className="text-4xl font-extrabold text-center">
        Simple task manager
      </h1>

      <TaskManager />
    </div>
  );
}

export default App;
