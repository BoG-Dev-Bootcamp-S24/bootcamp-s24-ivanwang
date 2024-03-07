

export default async function handler(req, res) {
    
    const URL1 = "https://pokeapi.co/api/v2/evolution-chain/";
    const URL2 = "https://pokeapi.co/api/v2/pokemon-species/";

    try {
        const name = req.query.name;
        if (!name || name === "") {
            res.status(400).json({error : "Name of pokemon is required"})
        }
        if (req.method == "GET") {
            const fetchURL1 = URL2 + name;
            const response1 = await fetch(fetchURL1);
            const data1 = await response1.json();
            
            const fetchURL2 = data1.evolution_chain.url;
            const response2 = await fetch(fetchURL2);
            const data2 = await response2.json();

            if (data2.chain.evolves_to.length === 0) {
                return res.status(200).json({"pokemonName": name})
            }
            if (data2.chain.evolves_to[0].species.name === name) {
                if (data2.chain.evolves_to[0].evolves_to.length !== 0) {
                    if (data2.chain.evolves_to[0].evolves_to[0].species.name === name) {
                        const temp = {"pokemonName": name }
                        return res.status(200).json(temp)
                    } else {
                        const temp = {"pokemonName": data2.chain.evolves_to[0].evolves_to[0].species.name }
                        return res.status(200).json(temp)
                    }
                }
            } else {
                if (data2.chain.evolves_to[0].evolves_to.length !== 0) {
                    if (name === data2.chain.evolves_to[0].evolves_to[0].species.name) {
                        const temp = {"pokemonName": name }
                        return res.status(200).json(temp)
                    } else {
                        const temp = {"pokemonName": data2.chain.evolves_to[0].species.name }
                        return res.status(200).json(temp)
                    }
                }
            }
            return res.status(200).json({pokemonName : data2.chain.evolves_to[0].species.name})
        } 
    } catch (error) {
        res.status(500).json({error : error.message})
    }
}