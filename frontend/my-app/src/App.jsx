import React from "react";
import './App.scss';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from './components/Home';
import Register from "./components/Register";
import Login from "./components/Login";
import Trailer from "./components/Trailer";
import MovieSearch from "./components/MovieSearch";
import MovieDetail from "./components/MovieDetail";
import Checkout from "./components/Checkout";
import Cart from "./components/Cart";

function App() {
    const user = true;
  return (
     
      <Router>
          <Switch>
              <Route exact path="/">
                  {user ? <Home /> : <Redirect to="/register" />}
              </Route>
              <Route path="/register">
                  {!user ? <Register /> : <Redirect to="/" />}
              </Route>
              <Route path="/login">{!user ? <Login /> : <Redirect to="/" />}</Route>
              <Route exact path="/trailer"><Trailer /></Route>
              <Route exact path="/Search"><MovieSearch /></Route>
              <Route exact path="/movieDetail/:id"><MovieDetail /></Route>
              <Route exact path="/Checkout"><Checkout /></Route>
              <Route exact path="/Cart"><Cart /></Route>
              
              
          </Switch>
      </Router>

  );
}


export default App;
