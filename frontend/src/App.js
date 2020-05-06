import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigationbar from "./components/layouts/NavigationBar/NavigationBar.jsx";
import Landing from "./components/pages/Landing/Landing.jsx";
import PWAPrompt from "react-ios-pwa-prompt";
import Footer from "./components/layouts/Footer/Footer.jsx";

import './App.css';

function App() {
  return (
    <div className="container-fluid">
      <Router>
        <Navigationbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          {/* <Route exact path="/about-me" component={AboutMe} />
          <Route exact path="/education" component={Education} /> */}
        </Switch>
      </Router>
      <Footer/>
      <PWAPrompt />
    </div>
  );
}

export default App;
