// src/ListofPlayers.js
import React from "react";

const ListofPlayers = () => {
  const players = [
    { name: "Virat", score: 85 },
    { name: "Rohit", score: 45 },
    { name: "Dhoni", score: 95 },
    { name: "Raina", score: 60 },
    { name: "Rahul", score: 30 },
    { name: "Bumrah", score: 70 },
    { name: "Shami", score: 50 },
    { name: "Ashwin", score: 65 },
    { name: "Jadeja", score: 40 },
    { name: "Kohli", score: 90 },
    { name: "Gill", score: 55 },
  ];

  const filteredPlayers = players.filter((player) => player.score < 70);

  return (
    <div>
      <h2>Players Scored Below 70</h2>
      <ul>
        {filteredPlayers.map((player, index) => (
          <li key={index}>
            {player.name} - {player.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
