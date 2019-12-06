import React from 'react';

function PlayerCard({ player }) {
  return (
    <div key={player.id}>
      <h1>{player.name}</h1>
      <p>{player.country}</p>
    </div>
  );
}

export default PlayerCard;