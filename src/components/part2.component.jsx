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
        I am highly enthusiastic and self-motivating programmer. I have strengthed myself in various data structures, 
        oops concepts and my problem solving skills. I am always hungry to learn more and more, and improving as a person.

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
          I am technical writer @Medium. I love sharing my knowledge in the easiest way possible and help others grow together
        </p>
      </div>
    </div>
  </div>
);

export default Part2;
