import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route exact path="/spa-react-redux" element={ <Home /> } />
    </Routes>
  );
}

export default App;
