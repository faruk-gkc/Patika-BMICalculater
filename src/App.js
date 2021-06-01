import React from 'react'
import Navbar from "./components/Navbar/Navbar";
import BmiCalc from "./components/BmiCalc";
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";
import BmiInfo from "./BmiInfo";
import BmiHowToCalculate from "./BmiHowToCalculate";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/bmiNedir" component={BmiInfo} />
          <Route path="/bmiHowToCalculate" component={BmiHowToCalculate} />
          <BmiCalc />
        </Switch>
      </Router>
    </>
  );
}

export default App;
