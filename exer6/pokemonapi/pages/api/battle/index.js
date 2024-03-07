

export default async function handler(req, res) {

    const URL = "https://pokeapi.co/api/v2/pokemon/";

    try {
        if (req.method === "POST") {
            const poke1 = req.query.poke1;
            const poke2 = req.query.poke2;

            if (!poke1 || !poke2) {
                res.status(400).json({error: "both pokemon need to have names"});
            }
            const temp1 = URL + poke1;
            const response1 = await fetch(temp1);
            const data1 = await response1.json();

            const temp2 = URL + poke2;
            const response2 = await fetch(temp2);
            const data2 = await response2.json();

            let pokeStats1 = 0;
            let pokeStats2 = 0;

            data1.stats.forEach(e => {
                pokeStats1 += e.base_stat
            });
            data2.stats.forEach(e => {
                pokeStats2 += e.base_stat
            });

            if (pokeStats1 > pokeStats2) {
                return res.status(200).json({winner: poke1 + " wins!"})
            } else if (pokeStats1 < pokeStats2) {
                return res.status(200).json({winner: poke2 + " wins!"})
            } else {
                return res.status(200).json({winner: poke1 + " and " + poke2 + " have tied"})
            }
        }
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}