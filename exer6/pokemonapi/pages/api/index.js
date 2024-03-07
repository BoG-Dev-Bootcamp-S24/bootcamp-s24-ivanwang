

export default async function handler(req, res) {
    
    const URL = "https://pokeapi.co/api/v2/pokemon/";

    if (req.method == "GET") {
        const index = Math.floor(Math.random() * (1025)) + 1;
        const fetchURL = URL + index;

        const response = await fetch(fetchURL);
        const pokeData = await response.json();

        const types = []
        pokeData.types.forEach(e => {
            types.push(e.type.name);  
        })
        const newPokeData = {"pokemonName" : pokeData.forms[0].name, "sprite" : pokeData.sprites.front_default, "types" : types }
        res.status(200).json(newPokeData)
    }
}