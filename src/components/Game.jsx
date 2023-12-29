import React from 'react'

const Game = ({cards}) => {
  return (
    <ul>
        { cards.map(card => <li key = {card.name}>{card.name}</li>)}
    </ul>
  )
}

export default Game