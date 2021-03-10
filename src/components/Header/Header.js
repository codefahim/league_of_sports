import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./../Home/Home";
import About from "./../About/About";
import NoMatch from "../NoMatch/NoMatch";
import "./Header.css";
import { Navbar, Nav } from "react-bootstrap";
import LeagueDetails from "../leagueDetails/LeagueDetails";

const Header = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="rootHeader">
            <h1 className="head top">FIFC</h1>
            <code className="text-uppercase head">
              federation of international football clubs
            </code>
          </div>
          <Navbar expand="sm">
            <Navbar.Brand>FIFC</Navbar.Brand>

            <Nav className="mr-auto">
              <li>
                <Link to="/Home">Home</Link>
              </li>
              /
              <li>
                <Link to="/About">About</Link>
              </li>
              /
              <li>
                <Link to="/Contact Us">Contact Us</Link>
              </li>
            </Nav>
          </Navbar>
          <Home></Home>
        </Route>
        <Route path="/Home">
          <div className="rootHeader">
            <h1 className="head top">FIFC</h1>
            <code className="text-uppercase head">
              federation of international football clubs
            </code>
          </div>
          <Navbar expand="sm">
            <Navbar.Brand>FIFC</Navbar.Brand>

            <Nav className="mr-auto">
              <li>
                <Link to="/Home">Home</Link>
              </li>
              /
              <li>
                <Link to="/About">About</Link>
              </li>
              /
              <li>
                <Link to="/Contact Us">Contact Us</Link>
              </li>
            </Nav>
          </Navbar>
          <Home></Home>
        </Route>
        <Route path="/About">
          <About></About>
        </Route>

        <Route path="/League/:idLeague">
          <LeagueDetails></LeagueDetails>
        </Route>
        <Route path="*">
          <NoMatch></NoMatch>
        </Route>
      </Switch>
    </Router>
  );
};

export default Header;
