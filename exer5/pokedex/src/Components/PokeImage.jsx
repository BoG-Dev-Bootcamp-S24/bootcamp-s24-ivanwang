import React from 'react';
import './PokeImage.css';

function PokeImage({ json }) {
    if (json == null) {
        return null;
    }

    console.log('json', json);

    const {name, sprites} = json;
    const image = sprites && sprites.front_default;

    console.log('image', image);

    return (
        <div className = "pokemonImageDiv">
            <img src = {image} alt = {name} className='pokemonImage'></img>
            <p className='pokeText'>
                {name}
            </p>
        </div>
    );
}

export default PokeImage;