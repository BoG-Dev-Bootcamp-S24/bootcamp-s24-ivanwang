import React from 'react';
import './Types.css';

function Types({ json }) {
    let types = json && json.types ? json.types.map(e => (
        <p key={e.type.name} className={e.type.name}>
            {e.type.name}
        </p>
    )):[];

    console.log('types', types.map(e => e.key));

    return (
        <div className='typeDiv'>
            <h2 className='typeText'>
                Types:
            </h2>
            <div className='typingDiv'>
                {types.map((typeName, index) => (
                    <div key={index} className='{typeName}'>
                        {typeName}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Types;