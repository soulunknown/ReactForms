/* eslint-disable */
import React from "react"
import SignUpForm from "./components/SignUpForm";
import Authenticate from "./components/Authenticate";
import { useState } from 'react';
import "./App.css"






export default function App() {

const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState(null);
const [token, setToken] = useState(null);

  

  return (
    <div className="class1">

      <Authenticate token={token} setToken={setToken}/>
      
      <SignUpForm token={token} setToken={setToken}/>
     
    </div>
  )
}


