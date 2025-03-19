// App.js
import React, { useEffect, useState } from "react"
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"
import { DrawingApp, modes } from "ae-drawable-canvas"

function App() {
  const [filteredModes, setFilteredModes] = useState(modes)

  useEffect(() => {
    if (true) {
      var x =
        [
          "line",
          "point",
          "singlearrowhead",
          "doublearrowhead",
          "circle",
          "coordinate",
          "curve",
          "curve4pts",
          "freedraw",
          "polygon",
          "rect",
          "text",
          "transform",
        ] || []
      setFilteredModes(modes.filter((modeObj) => x.includes(modeObj.mode)))
    }
  }, [])

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Drawing App for Economics work!</h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <div style={{ flex: 1, padding: "10px" }}>
          <h2>Legend:</h2>
          <ul>
            <li>
              Hoover over the drawing tools and you will see a pop-up text that
              tells you what each tool does
            </li>
            <li>
              For the 'polygon' tool, just left-mouse click to get the corners
              of the polygon and end with double click to close the polygon
            </li>
            <li>
              For the 'curve' tool, click at the desired points to mark the
              'control points' of the curve and end by double clicking.
            </li>
            <li> For all the other tools, just click and drag</li>
          </ul>
        </div>
        <div style={{ flex: 2 }}>
          <DrawingApp
            index={1}
            AssessName={"Test"}
            canvasWidth={450}
            canvasHeight={350}
            nextButtonClicked={true}
            modes={filteredModes}
          />
        </div>
      </div>
    </>
  )
}

export default App
