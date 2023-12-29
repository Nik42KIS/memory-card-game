import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Count from './components/Count';
import Game from './components/Game';

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function getCards() {
      const response = await fetch(BASE_URL);
      const result = await response.json();
      setCards(result.results);
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
