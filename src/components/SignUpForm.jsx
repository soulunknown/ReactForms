/* eslint-disable */

import { useState, useEffect } from "react";


export default function SignUpForm({setToken}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  
  


  async function handleSubmit(event) {
    event.preventDefault();
    if (password.length < 8 ) {
        alert(`password must be more than 8 characters`)
    } else {
        try {
            const response = await fetch(
              `https://fsa-jwt-practice.herokuapp.com/signup`,
              {
                method: "POST",
                body: JSON.stringify({ username, password,}),
              }
            );
            const result = await response.json();
            console.log(result.token)
            setToken(result.token)
            
          } catch (error) {
            setError(error.message);
          }
    }
    

    
  }
  return (
    <>
      <h2>Sign Up</h2>
      {error && <p>{error}</p>}

      <form onSubmit={handleSubmit}>
        <label>
          Username:{""}
          <input
          placeholder="type your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>

        <label>
          Password:{""}
          <input
          placeholder="type your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <button>Submit</button>
      </form>
    </>
  );
}
