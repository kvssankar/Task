import React from "react";
import "./App.css";
import NavBar from "./components/navbar.component";
import Part1 from "./components/part1.component";
import Part2 from "./components/part2.component";
import Part3 from "./components/part3.component";
import Part4 from "./components/part4.component";
import FinalPart from "./components/finalpart.component";
import RightBar from "./components/rightbar.component";
import Face from "./components/face.component";
import Github from "./components/github.component";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Face/>
      <Part1 />
      <Part2 />
      <Part3 />
      <Part4 />
      <Github/>
      <FinalPart />
      <RightBar/>
    </div>
  );
}

export default App;
