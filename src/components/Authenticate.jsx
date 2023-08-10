import React, { useState } from 'react';

export default function Authenticate({ token }) {
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);

  async function handleClick() {
    try {
      console.log("Token being used:", token);
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

      // Handle the API response
      const result = await response.json();

      if (response.ok) {
        // Set the success message if the request is successful
        setSuccessMessage(result.message);
        // Reset the error state
        setError(null);
      } else {
        // Handle authentication error
        throw new Error(result.message || "Authentication failed");
      }
    } catch (error) {
      console.error("Authentication error:", error);
      setError(error.message);
      // Reset the success message
      setSuccessMessage(null);
    }
  }

  return (
    <div>
      <h2>Authenticate</h2>
      {successMessage && <p>{successMessage}</p>}
      {error && <p>{error}</p>}
      <button onClick={handleClick}>Authenticate Token!</button>
    </div>
  );
}
