import React, { useState } from "react"
import "./calculator.css"

const Calculator = () => {
  const [value, setValue] = useState("")
  const [result, setResult] = useState("")
  return (
    <div>
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
                  <div className="input-box">
                    <input type="text" value={value} />
                  </div>
                  <div className="input-box">
                    <input type="text" value={result} />
                  </div>

                  <div className="input-box">
                    <div className="row">
                      <input
                        type="button"
                        value="7"
                        onClick={(e) => setValue(value + e.target.value)}
                      />
                      <input
                        type="button"
                        value="8"
                        onClick={(e) => setValue(value + e.target.value)}
                      />
                      <input
                        type="button"
                        value="9"
                        onClick={(e) => setValue(value + e.target.value)}
                      />
                      <input
                        type="button"
                        value="+"
                        onClick={(e) => setValue(value + e.target.value)}
                      />
                    </div>
                    <div className="row">
                      <input
                        type="button"
                        value="4"
                        onClick={(e) => setValue(value + e.target.value)}
                      />
                      <input
                        type="button"
                        value="5"
                        onClick={(e) => setValue(value + e.target.value)}
                        className="btn"
                      />
                      <input
                        type="button"
                        value="6"
                        onClick={(e) => setValue(value + e.target.value)}
                      />
                      <input
                        type="button"
                        value="-"
                        onClick={(e) => setValue(value + e.target.value)}
                      />
                    </div>
                    <div className="row">
                      <input
                        type="button"
                        value="1"
                        onClick={(e) => setValue(value + e.target.value)}
                      />
                      <input
                        type="button"
                        value="2"
                        onClick={(e) => setValue(value + e.target.value)}
                      />
                      <input
                        type="button"
                        value="3"
                        onClick={(e) => setValue(value + e.target.value)}
                      />
                      <input
                        type="button"
                        value="*"
                        onClick={(e) => setValue(value + e.target.value)}
                      />
                    </div>
                    <div className="row">
                      <input
                        type="button"
                        value="0"
                        style={{ width: "130px" }}
                        onClick={(e) => setValue(value + e.target.value)}
                      />
                      <input
                        type="button"
                        value="."
                        onClick={(e) => setValue(value + e.target.value)}
                      />
                      <input
                        type="button"
                        value="/"
                        onClick={(e) => setValue(value + e.target.value)}
                      />
                    </div>
                    <div className="row">
                      <input
                        type="button"
                        value="C"
                        onClick={(e) => setValue("") == setResult("")}
                      />
                      <input
                        type="button"
                        value="De"
                        onClick={(e) => setValue(value.slice(0, -1))}
                      />
                      <input
                        type="button"
                        value="="
                        style={{ width: "130px" }}
                        onClick={(e) => {
                          return setResult(eval(value)) == result
                        }}
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </body>
    </div>
  )
}

export default Calculator
