import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import PokeImage from './Components/PokeImage';

function App() {
  const [id, setId] = useState(1);
  const [pokemonJSON, setPokemonJSON] = useState(null);

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
            <PokeImage json={pokemonJSON}/>

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
      </body>
    </div>
  );
}

export default App;
