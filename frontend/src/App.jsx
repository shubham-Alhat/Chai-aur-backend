import { useState } from "react";
import axios from "axios";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes") // In vite.config.js, we add proxy as "api":"http://localhost:3000"
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1>Chai aur Full stack</h1>
      <p>Jokes:{jokes.length}</p>
      <div key={Date.now()}>
        {jokes.map((joke) => (
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <h4>{joke.content}</h4>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
