

export default async function handler(req, res) {
    
    const URL = "https://pokeapi.co/api/v2/pokemon/";
    
    try {
        const name = req.query.name;

        if (!name || name === "") {
            res.status(400).json({error : "Name of pokemon is needed"})
        }

        if (req.method == "GET") {
            const fetchURL = URL + name;
            const response = await fetch(fetchURL);
            const data = await response.json();

            const types = []
            data.types.forEach(e => {
                types.push(e.type.name);  
            })
            const newData = {"PokemonName": data.forms[0].name, "Sprite": data.sprites.front_default, "Types": types }
            res.status(200).json(newData)
        } 
    } catch (error) {
        res.status(500).json({error : error.message})
    }
}