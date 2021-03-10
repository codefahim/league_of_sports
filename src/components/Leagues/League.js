import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import "./league.css";

const League = ({ id, strLeague, strSport, strLeagueAlternate, children }) => {
  const [leagueInfo, setInfo] = useState([]);
  const { strBadge } = leagueInfo;

  useEffect(() => {
    fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`)
      .then((response) => response.json())
      .then((league) => setInfo(league.leagues[0]));
  }, [id]);
  return (
    <div className="leagueCard" style={{ margin: "20px 10px" }}>
      <Card
        style={{
          width: "20rem",
          border: "0",
          boxShadow: "1px 3px 21px 5px rgba(0,0,0,0.07)",
        }}
      >
        <div style={{ width: "15rem", margin: "auto", marginTop: "20px" }}>
          <Card.Img variant="top" src={strBadge} />
        </div>
        <Card.Body>
          <Card.Title style={{ fontWeight: "bold", fontSize: "1.3rem" }}>
            {strLeagueAlternate || strLeague}
          </Card.Title>
          <p
            style={{ color: "#656565", fontSize: "1.1rem", fontWeight: "400" }}
          >
            Sports type: {strSport}
          </p>
          {children}
        </Card.Body>
      </Card>
    </div>
  );
};

export default League;
