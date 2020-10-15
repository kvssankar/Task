import React from "react";
import "../sass/part1.scss";
import "../sass/flex.scss";
import Hire from "./hire.component";

const Part1 = () => (
  <div id="about" className="parent-flex" style={{ justifyContent: "center" }}>
    <div className="left">
      <h1>
        {" "}
        Hard work pays off <span></span>🔨 !!
      </h1>
      <p>
        This has been my go-to <span></span>🤚 since my childhood. I always love
        ❤️‍ learning and playing with new tech 💻. Being a full stack developer
        🤓, I try my best to find solutions for real-time problems through
        technology. If I am not coding then I am busy 🥱 in making new projects
        which are useful for the society. I am also a technical writer 📝. I
        enjoy sharing my knowledge in the easiest way possible to help others
        and grow together 💗.
      </p>
      <div className="parent-flex" style={{ flexWrap: "nowrap" }}>
        <a
          href="../../public/resume.pdf"
          download="kvssk-resume"
          className="common-button"
          style={{ backgroundColor: "rgb(255, 51, 0)" }}
        >
          DOWNLOAD MY RESUME &#8613;
        </a>
        <Hire />
      </div>
    </div>
    <div style={{ width: "400px" }} className="right">
      <img
        src="https://image.freepik.com/free-vector/businessman-entrepreneur-working-office-desk_3446-678.jpg"
        className="phone-img"
        alt=""
      />
    </div>
  </div>
);

export default Part1;
