import React from 'react';
import './PokeImage.css'

function PokeImage({ json }) {
    if (json == null) {
        return null;
    }

    const {name, sprite} = json;
    const image = sprite && sprite.front_default;

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