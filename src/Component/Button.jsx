import React from 'react'
import "./button.css"

const Button = ({inputButton,clear,deleteVlaue,resultValue}) => {
  return (
    <div>
      <div className="input-box">
                    <div className="row">
                      <input
                        type="button"
                        value="7"
                        onClick={inputButton}
                      />
                      <input
                        type="button"
                        value="8"
                        onClick={inputButton}
                      />
                      <input
                        type="button"
                        value="9"
                        onClick={inputButton}
                      />
                      <input
                        type="button"
                        value="+"
                        onClick={inputButton}
                      />
                    </div>
                    <div className="row">
                      <input
                        type="button"
                        value="4"
                        onClick={inputButton}
                      />
                      <input
                        type="button"
                        value="5"
                        onClick={inputButton}
                        className="btn"
                      />
                      <input
                        type="button"
                        value="6"
                        onClick={inputButton}
                      />
                      <input
                        type="button"
                        value="-"
                        onClick={inputButton}
                      />
                    </div>
                    <div className="row">
                      <input
                        type="button"
                        value="1"
                        onClick={inputButton}
                      />
                      <input
                        type="button"
                        value="2"
                        onClick={inputButton}
                      />
                      <input
                        type="button"
                        value="3"
                        onClick={inputButton}
                      />
                      <input
                        type="button"
                        value="*"
                        onClick={inputButton}
                      />
                    </div>
                    <div className="row">
                      <input
                        type="button"
                        value="0"
                        style={{ width: "130px" }}
                        onClick={inputButton}
                      />
                      <input
                        type="button"
                        value="."
                        onClick={inputButton}
                      />
                      <input
                        type="button"
                        value="/"
                        onClick={inputButton}
                      />
                    </div>
                    <div className="row">
                      <input
                        type="button"
                        value="C"
                        onClick={clear}
                      />
                      <input
                        type="button"
                        value="De"
                        onClick={deleteVlaue}
                      />
                      <input
                        type="button"
                        value="="
                        style={{ width: "130px" }}
                        onClick={resultValue}
                      />
                    </div>
                  </div>
    </div>
  )
}

export default Button
