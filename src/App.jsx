import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import PokemonProvider from './components/PokemonProvider'

function App() {
  return (
  <>
    <Header/>
    <PokemonProvider/>

  </>
)
}

export default App