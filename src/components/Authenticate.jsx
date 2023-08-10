/* eslint-disable */
import React from "react"
import { useState } from 'react';

// const Authenticate = ({token})


export default function Authenticate({token}) {
    console.log(token)
    const [error, setError] = useState(null)
    const [successMessage, setSuccessMessage] = useState(null)
    const [data, setData] = useState(null)

    async function handleClick() {

    try {
        console.log(token)
        const response = await fetch(`https://fsa-jwt-practice.herokuapp.com/authenticate`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            }   
           })
           console.log(`Bearer ${token}`)
            const result = await response.json()
            console.log(result)
            setSuccessMessage(result.message)
            setData(result.data)
            

    } catch (error) {
        setError(error.message)
    }}     

    
        
    
    return (
        <>
        <h2>Authenticate!</h2>
        {successMessage && <p>{successMessage}</p>}
        {error && <p>{error}</p>}
        <div className="class2">
        <button onClick={handleClick}>Authenticate Token</button>
        </div>
        {data ? <h4>{data.iat}</h4> : ""}
        </>
    );
  }


