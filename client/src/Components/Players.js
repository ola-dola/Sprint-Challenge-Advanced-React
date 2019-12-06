import React from 'react';
import {useFetch} from '../hooks/index'
import PlayerCard from "./PlayerCard"

export default function Players({players}) {

  const [img] = useFetch("https://api.thecatapi.com/v1/images/search");
  // console.log(img);
  
  return (
    <div>
      <h1>Lorem ipsummm</h1>
      <img src={img} alt="randoms!!" />
      {
        players.map(player => {
          return <PlayerCard player={player} />
        })
      }
    </div>
  )
}