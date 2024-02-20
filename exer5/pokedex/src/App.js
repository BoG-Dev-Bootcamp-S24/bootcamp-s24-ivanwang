import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import PokeImage from './Components/PokeImage';
import StatsSection from './Components/StatsSection';
import Types from './Components/Types';

function App() {
  const [id, setId] = useState(1);
  const [pokemonJSON, setPokemonJSON] = useState(null);
  const [stats, setStats] = useState(true);
  const [info, setInfo] = useState('#78C850'); 
  const [moves, setMoves] = useState('#E0E0E0');

  const URL = "https://pokeapi.co/api/v2/pokemon";

  async function getAPI(id) {
    try {
      const response = await fetch(`${URL}/${id}/`);
      console.log('response', response);
      const pokeJSON = await response.json();
      setPokemonJSON(pokeJSON);
      console.log('pokemonJSON', pokemonJSON);
    } catch (error) {
      console.error("Error fetching data:", error);
      setPokemonJSON(null);
    }
  }

  useEffect(() => {
    getAPI(id);
  }, [id])

  return (
    <div className="App">
      <body>
        <h1 className = "head">
          Exercise 5 - PokeDex!
        </h1>
        <div className = "outerDiv">
          <div className = "pokeDiv">
            <PokeImage json = {pokemonJSON}></PokeImage>
            <Types json = {pokemonJSON}></Types>
            <div className='buttonDiv'>
              <button className='directionButton' onClick={() => {
                if (id !== 1) {
                  setId(id - 1);
                }
              }}>
                &lt;
              </button>

              <button className='directionButton' onClick={() => {
                setId(id + 1);
              }}>
                &gt;
              </button>
            </div>
          </div>
          <div className='statsDiv'>
            <StatsSection json = {pokemonJSON} stats = {stats}></StatsSection>
            <div className='buttonDiv'>

              <button className='directionButton' onClick={() => {
                setStats(true);
                setInfo('#78C850');
                setMoves('#E0E0E0');
              }}style={{ backgroundColor: info }}>
                Info
              </button>

              <button className='directionButton' onClick={() => {
                setStats(false);
                setInfo('#E0E0E0');
                setMoves('#78C850');
              }}style={{ backgroundColor: moves }}>
                Moves
              </button>

            </div>
         </div>
        </div>
      </body>
    </div>
  );
}

export default App;
