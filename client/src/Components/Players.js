import React from 'react';
import PlayerCard from "./PlayerCard"

export default function Players({players}) {

  return (
    <div>
      {
        players.map(player => {
          return <PlayerCard player={player} />
        })
      }
    </div>
  )
}