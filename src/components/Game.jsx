import '../App.css';

const Game = ({ cards, setCards, setRecord, record, count,  setCount }) => {

  const shuffle = (arr) => {
    for(let i = arr.length-1; i > 0; i--){
      let tmp = arr[i];
      let rnd = Math.floor(Math.random() * (1+i));
      arr[i] = arr[rnd]
      arr[rnd] = tmp
    }
    setCards(arr)
  }

  const restartGame = () =>{
    if(record < count){
      setRecord(count)
    }
    setCount(0)
  }

  const checkRightImage = (event) =>{
    if(event.target.closest('.list_item').classList.contains('checked')){
      restartGame()
    }else{
        setCount((prev) => (prev += 1))
    event.target.closest('.list_item').classList.add('checked')
    shuffle(cards)
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
