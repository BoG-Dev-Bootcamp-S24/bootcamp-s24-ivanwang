

export default async function handler(req, res) {
    
    const URL = "https://pokeapi.co/api/v2/type/";

    try {
        const type = req.query.type;
        if (!type) {
            res.status(400).json({error : "Type of pokemon is needed"})
        }
        if (req.method == "GET") {
            const fetchURL = URL + type;
            const response = await fetch(fetchURL);
            const data = await response.json();

            const pokemon = []
            data.pokemon.forEach(e => {
                pokemon.push(e.pokemon.name);  
            })
            const newData = {"pokemon": pokemon}
            res.status(200).json(newData)
        } 
    } catch (error) {
        res.status(500).json({error : error.message})
    }
}