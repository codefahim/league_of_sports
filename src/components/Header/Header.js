import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
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
                <NavLink
                  activeStyle={{ color: "#A3CB38", fontWeight: "bold" }}
                  to="/Home"
                >
                  Home
                </NavLink>
              </li>
              /
              <li>
                <NavLink
                  activeStyle={{ color: "#A3CB38", fontWeight: "bold" }}
                  to="/About"
                >
                  About
                </NavLink>
              </li>
              /
              <li>
                <NavLink
                  activeStyle={{ color: "#A3CB38", fontWeight: "bold" }}
                  to="/Contact Us"
                >
                  Contact Us
                </NavLink>
              </li>
            </Nav>
          </Navbar>
          <Home></Home>
        </Route>
        <Route path="/About">
          <Navbar expand="sm">
            <Navbar.Brand>FIFC</Navbar.Brand>

            <Nav className="mr-auto">
              <li>
                <NavLink
                  activeStyle={{ color: "#A3CB38", fontWeight: "bold" }}
                  to="/Home"
                >
                  Home
                </NavLink>
              </li>
              /
              <li>
                <NavLink
                  activeStyle={{ color: "#A3CB38", fontWeight: "bold" }}
                  to="/About"
                >
                  About
                </NavLink>
              </li>
              /
              <li>
                <NavLink
                  activeStyle={{ color: "#A3CB38", fontWeight: "bold" }}
                  to="/Contact Us"
                >
                  Contact Us
                </NavLink>
              </li>
            </Nav>
          </Navbar>
          <About></About>
        </Route>

        <Route path="/League/:idLeague">
          <Navbar expand="sm">
            <Navbar.Brand>FIFC</Navbar.Brand>

            <Nav className="mr-auto">
              <li>
                <NavLink
                  activeStyle={{ color: "#A3CB38", fontWeight: "bold" }}
                  to="/Home"
                >
                  Home
                </NavLink>
              </li>
              /
              <li>
                <NavLink
                  activeStyle={{ color: "#A3CB38", fontWeight: "bold" }}
                  to="/About"
                >
                  About
                </NavLink>
              </li>
              /
              <li>
                <NavLink
                  activeStyle={{ color: "#A3CB38", fontWeight: "bold" }}
                  to="/Contact Us"
                >
                  Contact Us
                </NavLink>
              </li>
            </Nav>
          </Navbar>
          <LeagueDetails></LeagueDetails>
        </Route>
        <Route path="*">
          <Navbar expand="sm">
            <Navbar.Brand>FIFC</Navbar.Brand>

            <Nav className="mr-auto">
              <li>
                <NavLink
                  activeStyle={{ color: "#A3CB38", fontWeight: "bold" }}
                  to="/Home"
                >
                  Home
                </NavLink>
              </li>
              /
              <li>
                <NavLink
                  activeStyle={{ color: "#A3CB38", fontWeight: "bold" }}
                  to="/About"
                >
                  About
                </NavLink>
              </li>
              /
              <li>
                <NavLink
                  activeStyle={{ color: "#A3CB38", fontWeight: "bold" }}
                  to="/Contact Us"
                >
                  Contact Us
                </NavLink>
              </li>
            </Nav>
          </Navbar>
          <NoMatch></NoMatch>
        </Route>
      </Switch>
    </Router>
  );
};

export default Header;
