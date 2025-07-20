import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import ClassInput from "./todo.jsx"

function App() {
  return (
    <div className="mainContainer">
      <ClassInput name="Todo List" />
    </div>
  )
}

export default App
