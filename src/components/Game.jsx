import '../App.css';

const Game = ({ cards, setCount }) => {
  const checkRightImage = (event) =>{
    if(event.target.classList.contains('checked')){
      //
    }else{
        setCount((prev) => (prev += 1))
    event.target.classList.add('checked')
    }
  
  }
  return (
    <ul className="list">
      {cards.map((card) => {
        return (
          <li
            onClick={(event) => {
              checkRightImage(event)
            }}
            className="list_item"
            key={card.id}>
            <img src={card.images.original.url} alt="" />
          </li>
        );
      })}
    </ul>
  );
};

export default Game;
