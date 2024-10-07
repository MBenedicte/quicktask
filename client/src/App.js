import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [welcomeMessage, setWelcomeMessage] = useState("");
  console.log(welcomeMessage);
  // Fetch the welcome message from the backend
  useEffect(() => {
    fetch("http://localhost:3000/api/welcome")
      .then((response) => response.json())
      .then((data) => setWelcomeMessage(data.message))
      .catch((error) => console.error("Error fetching welcome message:", error));
  }, []);

  return (
    <div className="app-style">
      <div className="">{welcomeMessage ? welcomeMessage : "Loading..."}</div>
    </div>
  );
}

export default App;
