/* eslint-disable */
import React from "react"
import SignUpForm from "./components/SignUpForm";
import Authenticate from "./components/Authenticate";
import { useState } from 'react';





export default function App() {

const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState(null);

  

  return (
    <>
      <Authenticate />

      <SignUpForm />
     
    </>
  )
}


