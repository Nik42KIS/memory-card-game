import '../App.css'

const Game = ({ cards }) => {
  return (
    <ul className='list'>
      {cards.map((card) => {
      return  (
      <li className='list_item' key={card.id}>
            <img src={card.images.original.url} alt='' />
        </li>
        )
      })}
    </ul>
  );
};

export default Game;
