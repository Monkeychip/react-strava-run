import React from "react";
import SingleView from "./components/SingleView";
import "./App.css";

const App = () => {
  return (
    <div
      id="react-app"
      className="flex justify-center bg-slate-800 h-screen w-screen p-5"
    >
      <SingleView />
    </div>
  );
};
export default App;
