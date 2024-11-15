// App.js
import React from "react"
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import DrawingApp from "./components/DrawingApp"
import "./App.css"

function App() {
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
          <DrawingApp />
        </div>
      </div>
    </>
  )
}

export default App
