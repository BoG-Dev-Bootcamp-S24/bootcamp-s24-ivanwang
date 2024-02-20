import React from 'react';
import './StatsSection.css';

function StatsSection({ json, stats }) {
    if(json == null) {
        return null;
    }

    console.log('json', json);

    if (stats) {
        return (
            <div className='infoDiv'>
                <h2 className='statH2'>
                    Info
                </h2>
                <ul className='infoUl'>
                    <li className='li'>Height: {json.height}m</li>
                    <li className='li'>Weight: {json.weight}kg</li>
                    <li className='li'>HP: {json.stats[0].base_stat}</li>
                    <li className='li'>Attack: {json.stats[1].base_stat}</li>
                    <li className='li'>Defense: {json.stats[2].base_stat}</li>
                    <li className='li'>Special Attack: {json.stats[3].base_stat}</li>
                    <li className='li'>Special Defense: {json.stats[4].base_stat}</li>
                    <li className='li'>Speed: {json.stats[5].base_stat}</li>
                </ul>
            </div>
        );
    } else {
        return (
            <div className='infoDiv'>
                <h2 className='statH2'>
                    Moves
                </h2>
                <ul className='infoUl'>
                    {json.moves && json.moves.map((e, i) => (
                        <li key = {i}>
                            {e.move.name}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default StatsSection;
