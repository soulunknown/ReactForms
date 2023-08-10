import React, { useState } from "react";


export default function Authenticate({ token }) {
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);
  const [username, setUsername] = useState(""); // State for displaying the username

  async function handleClick() {
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/authenticate",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const result = await response.json();

      if (response.ok) {
        // Set the success message if the request is successful
        setSuccessMessage(result.message);
        // Display the username from the data property
        setUsername(result.data.username);
        // Reset the error state
        setError(null);
      } else {
        // Handle authentication error
        throw new Error(result.message || "Authentication failed");
      }
    } catch (error) {
      // Handle network request error
      setError(error.message);
      // Reset the success message and username
      setSuccessMessage(null);
      setUsername("");
    }
  }

  return (
    <div className="authenticate-container">
      <h2>Authenticate</h2>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {error && <p className="error-message">{error}</p>}
      {username && <p className="username">Logged in as: {username}</p>}
      <button onClick={handleClick}>Authenticate Token!</button>
    </div>
  );
}
