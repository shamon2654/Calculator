import React from "react"
import { useState } from "react"
import "./App.css"
import Calculator from "./Component/Calculator"

function App() {
  const [value, setValue] = useState("")
  const [result, setResult] = useState("")
  return (
    <>
      <Calculator/>
    </>
  )
}

export default App
