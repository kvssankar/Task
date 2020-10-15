import React from "react";
import "../sass/navbar.scss";
import "../sass/flex.scss";
const Part2 = () => (
  <div className="parent-flex" style={{ justifyContent: "center",marginTop:"50px" }}>
    <h2 style={{ textAlign: "center", width: "100%" }}>Who am I ?</h2>
    <div className="parent-grid">
      <div className="flex-element">
        <img
          src="https://image.freepik.com/free-vector/code-typing-concept-illustration_114360-3581.jpg"
          alt=""
        />
        <h4>Competitive Coder</h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos itaque
          cupiditate nemo quia dolorem. Nam, quam obcaecati. Ad, quod
          perspiciatis.
        </p>
      </div>
      <div className="flex-element">
        <img
          src="https://image.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg"
          alt=""
        />
        <h4>Full Stack Web Developer</h4>
        <p>
          I am a Full stack web developer, well versed in mern stack (Mongo
          Express React NodeJs). Apart from these i have made many projects
          using php, jquery, ejs, mySql, angular.
        </p>
      </div>
      <div className="flex-element">
        <img
          src="https://image.freepik.com/free-vector/blogging-concept-illustration_114360-1038.jpg"
          alt=""
        />
        <h4>Technical Writer</h4>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos itaque
          cupiditate nemo quia dolorem. Nam, quam obcaecati. Ad, quod
          perspiciatis.
        </p>
      </div>
    </div>
  </div>
);

export default Part2;
