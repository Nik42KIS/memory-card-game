import { useEffect, useState } from 'react';
import './App.css';
import Count from './components/Count';
import Game from './components/Game';

const BASE_URL = 'https://api.giphy.com/v1/gifs/trending?api_key=wEcH0ljpto42JAT5uUammPVhSHykK88c&limit=12&offset=0&rating=g&bundle=messaging_non_clips';
// const API_KEY = 'wEcH0ljpto42JAT5uUammPVhSHykK88c'
function App() {
  const [cards, setCards] = useState([]);
  const [count, setCount] = useState(0)
  const [record, setRecord] = useState(0)
  useEffect(() => {
    async function getCards() {
      const response = await fetch(BASE_URL);
      const result = await response.json();
      setCards(result.data);
    }
    // return setCards({})
    getCards();
  }, []);
  console.log(cards);
  return (
    <div className='container'>
      <header>
      <span className='rules'>Get points by clicking on an image but don't click on any more than once!</span>
      <Count record = {record} count = {count} />
      </header>
      <Game setCards = {setCards} record = {record} count = {count} setRecord = {setRecord} setCount = {setCount} cards={cards} />
    </div>
  );
}

export default App;
