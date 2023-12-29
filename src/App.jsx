import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Count from './components/Count'
import Game from './components/Game'

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon'

function App() {
 const [cards, setCards] = useState('')
useEffect(() =>{
  async function getCards(){
    const response = await fetch(BASE_URL)
   setCards(await response.json())

  }
  getCards()
},[])
console.log(cards.results)
  return (
    <>
    <Count />
    <Game cards = {cards.results}/>
    </>
  )
}

export default App
