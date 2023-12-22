import React from "react"
import "./screen.css"

const Screen = ({ value,result }) => {
  return (
    <div>
      <div className="input-box">
        <input type="text" value={value} />
      </div>
      <div className="input-box">
        <input type="text" value={result} />
      </div>
    </div>
  )
}

export default Screen
