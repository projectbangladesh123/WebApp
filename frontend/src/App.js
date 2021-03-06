//import React, { useEffect } from "react";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigationbar from "./components/layouts/NavigationBar/NavigationBar.jsx";
import Landing from "./components/pages/Landing/Landing.jsx";
import Contact from "./components/pages/Contact/Contact.jsx";
import Join from "./components/pages/Join/Join.jsx"
import About from "./components/pages/About/About.jsx"
import PWAPrompt from "react-ios-pwa-prompt";
import Construction from './components/pages/Construction/Construction';
import Footer from "./components/layouts/Footer/Footer.jsx";



import './App.css';

function App() {
  return (
    <div className="container-fluid">
      <Router>
        <Navigationbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path = "/about" component = {About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/join" component={Join} />
          <Route exact path = "/blog" component = {Construction} />
        </Switch>
      </Router>
      <Footer />
      <PWAPrompt />
    </div>
  );
}

export default App;
