import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from "./routes/Home"
import Movie from "./components/Movie";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/movie" element={<Detail/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;