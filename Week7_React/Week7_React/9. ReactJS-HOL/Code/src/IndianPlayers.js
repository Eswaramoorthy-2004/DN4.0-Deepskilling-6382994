// src/IndianPlayers.js
import React from "react";

const IndianPlayers = () => {
  const players = [
    "Virat", "Rohit", "Dhoni", "Raina", "Rahul", "Bumrah"
  ];

  const [p1, p2, p3, p4, p5, p6] = players;

  const oddTeam = [p1, p3, p5];
  const evenTeam = [p2, p4, p6];

  const T20players = ["Kohli", "Surya", "Hardik"];
  const RanjiTrophy = ["Pujara", "Jadeja", "Saha"];

  const allPlayers = [...T20players, ...RanjiTrophy];

  return (
    <div>
      <h2>Odd Team Players:</h2>
      <ul>{oddTeam.map((player, i) => <li key={i}>{player}</li>)}</ul>

      <h2>Even Team Players:</h2>
      <ul>{evenTeam.map((player, i) => <li key={i}>{player}</li>)}</ul>

      <h2>All Players (Merged):</h2>
      <ul>{allPlayers.map((player, i) => <li key={i}>{player}</li>)}</ul>
    </div>
  );
};

export default IndianPlayers;
