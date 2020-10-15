import React, { useEffect, useState } from "react"
import {
    Card, CardTitle, CardText, CardColumns,
    CardSubtitle, CardBody,Spinner
  } from 'reactstrap';
import axios from 'axios';
import "../github.css";
 
const Github = () => {
    const [data,setData]=useState([]);
    useEffect(()=>{
        axios.get("https://api.github.com/users/kvssankar/repos").then(res=>setData(res.data));
    },[])
  return (
    <div id="github" className="parent-flex" style={{ justifyContent: "center",width:"70%",margin:"50px auto" }}>
        <h1>My Projects</h1>
        <br/>
      <CardColumns>
          {data.length===0 && <Spinner style={{ width: '3rem', height: '3rem' }} />}
          {data.length!==0 && data.map(ele=>(
            <Card>
        <CardBody>
          <CardTitle style={{textTransform:"capitalize"}}><b>{ele.name}</b></CardTitle>
          <CardSubtitle style={{textTransform:"uppercase"}}>{ele.language}</CardSubtitle>
          <CardText>{ele.description}</CardText>
          <a className="btn btn-primary" href={ele.svn_url}>Explore</a>
        </CardBody>
      </Card>
          ))}
      
      </CardColumns>
    </div>
  )
}
 
export default Github