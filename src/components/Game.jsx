import React from 'react';

const Game = ({ cards }) => {
  return (
    <ul>
      {cards.map((card) => {
      return  (
      <li key={card.id}>
            <img src={card.images.original.url} alt='' />
        </li>
        )
      })}
    </ul>
  );
};

export default Game;
