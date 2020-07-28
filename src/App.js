import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BenchPress from "./pages/BenchPress";
import Squat from "./pages/Squat";
import DeadLift from "./pages/DeadLift";
import Login from "./pages/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/benchpress">
            <BenchPress />
          </Route>
          <Route path="/deadlift">
            <DeadLift />
          </Route>
          <Route path="/squat">
            <Squat />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
