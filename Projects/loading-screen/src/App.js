import React, { useState, useEffect } from 'react';
import './App.css';
import mylogo from "./my-logo.png"
import ScaleLoader from "react-spinners/ScaleLoader";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <div className="App">
      {
        loading ?
          <div className="my-logo">
            <ScaleLoader
              color={"#000"}
              loading={loading}
              size={10}
            />
            <h2><img src={mylogo} /></h2>
          </div>

          :
          <header className="App-header">
            <h2>Loading screen project</h2>
          </header>
      }
    </div>
  );
}

export default App;
