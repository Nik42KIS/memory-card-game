import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Count from './components/Count';
import Game from './components/Game';

const BASE_URL = 'https://api.giphy.com/v1/gifs/trending?api_key=wEcH0ljpto42JAT5uUammPVhSHykK88c&limit=20&offset=0&rating=g&bundle=messaging_non_clips';
const API_KEY = 'wEcH0ljpto42JAT5uUammPVhSHykK88c'
function App() {
  const [cards, setCards] = useState([]);

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
    <>
      <Count />
      <Game cards={cards} />
    </>
  );
}

export default App;
