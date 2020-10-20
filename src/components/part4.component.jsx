import React from "react";
import "../sass/navbar.scss";
import "../sass/flex.scss";

const Part4 = () => (
  <div id="projects" className="parent-flex" style={{ justifyContent: "center",marginTop:"80px" }}>
    <div className="left" style={{ width: "30%" }}>
      <h2>
        <b> Some of my featured projects !!</b>
      </h2>
      <p style={{ textAlign: "left" }}>
        Being a web developeri always love making projects which has real-life usecases. Most of my projects are
        made using MERN stack including this website you are viewing...
      </p>
      <a style={{ width: "40%" }} href="https://github.com/kvssankar/" className="spl-button">
        LEARN MORE
      </a>
    </div>
    <div className="right" style={{ width: "60%" }}>
      <div className="right-grid">
        <div className="flex-element">
          <img
            src="https://www.flaticon.com/svg/static/icons/svg/1818/1818752.svg"
            alt=""
            style={{width:"100px",height:"auto",marginBottom:"30px"}}
          />
          <h4>ClubHouse</h4>
          <p>
          Web site created to perform multiple tasks of an organisation at one place
          </p>
          <a href="http://theclubhouse3000.herokuapp.com/">Explore</a>
        </div>
        <div className="flex-element">
          <img
            src="https://www.flaticon.com/svg/static/icons/svg/2904/2904587.svg"
            alt=""
            style={{width:"100px",height:"auto",marginBottom:"30px"}}
          />
          <h4>Covid Stats</h4>
          <p>
          CovidStats and Healthcare support <span aria-label="emoji" role="img">🦸‍♂️</span>
          </p>
          <a href="https://kvssankar.github.io/covid19/index.html">Explore</a>
        </div>

        <div className="flex-element">
          <img
            src="https://www.flaticon.com/svg/static/icons/svg/2850/2850507.svg"
            alt=""
            style={{width:"100px",height:"auto",marginBottom:"30px"}}
          />
          <h4>Ventor</h4>
          <p>
          Confused about which subject to take next semester? Well not anymore, get delicately analysed semester-wise timeline and live life hassle free.
          </p>
          <a href="https://ventor.vinnovateit.com/">Explore</a>
        </div>
        <div className="flex-element">
          <img
            src="https://github.blog/wp-content/uploads/2020/03/github-npm-blog.png?fit=2400%2C1260"
            alt=""
            style={{width:"200px",height:"100px",margin:"30px"}}
          />
          <h4>Git ultimate cloner</h4>
          <p>
This package clones the repo, installs packages required from package.json and instantly opens vscode for you
          </p>
          <a href="https://www.npmjs.com/package/git-ultimate-cloner">Explore</a>
        </div>
      </div>
    </div>
  </div>
);

export default Part4;
