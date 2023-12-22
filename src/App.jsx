import React from "react"
import { useState } from "react"
import "./App.css"

import Button from "./Component/Button"
import Screen from "./Component/Screen"

function App() {
  const [value, setValue] = useState("")
  const [result, setResult] = useState("")
  const inputButton = (e) => setValue( value  + e.target.value)
  const clear = () => setValue("") == setResult("")
  const deleteVlaue = () => setValue(value.slice(0, -1))
  const resultValue = () => {
    return setResult(eval(value)) == result
  }
  
  return (
    <>
      <body>
        <section>
          <div className="color"></div>
          <div className="color"></div>
          <div className="color"></div>
          <div className="box">
            <div className="continer">
              <div className="form">
                <h2>Calculator</h2>
                <form action="">
                  <Screen value={value} result={result } />
                  <Button
                    inputButton={inputButton}
                    clear={clear}
                    deleteVlaue={deleteVlaue}
                    resultValue={resultValue}
                  />
                </form>
              </div>
            </div>
          </div>
        </section>
      </body>
    </>
  )
}

export default App
