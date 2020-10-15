import React from "react";
import "../sass/navbar.scss";
import "../sass/finalpart.scss";
import "../sass/flex.scss";
import { Jumbotron, Button, Input } from 'reactstrap';
const FinalPart = () => (
  <div id="contact">
    <Jumbotron>
        <div>
          <h4>Contact Me</h4>
          <p>I am a social animal 🐵</p>
          <p>You can reach me anytime, do follow me github 😄 and other social media handles and if you like my projects don't forget to star the repo</p>
          <p>Copyright ©2020 All rights reserved | This website is made with 💖 by KVSSK</p>
        </div>
        <div>
          <h6>Want to reach me directly, text here</h6>
          <Input/> <Button style={{marginTop:"10px"}} color="primary">Send</Button>
        </div>
        <div>
          <h5>Made using </h5>
          
        <div style={{width:"100%"}} class="grid-container">
          <img width="100px" src="https://www.flaticon.com/premium-icon/icons/svg/1183/1183672.svg" alt=""/>
          <img width="100px" src="https://img.icons8.com/color/452/bootstrap.png" alt=""/>
          <img width="100px" src="https://www.flaticon.com/svg/static/icons/svg/919/919825.svg" alt=""/>
          <img width="100px" src="https://img.icons8.com/color/452/mongodb.png" alt=""/>
        </div>
        <p>Hosted using Heroku as a webpack</p>
        </div>
      </Jumbotron>
    </div>
);

export default FinalPart;
