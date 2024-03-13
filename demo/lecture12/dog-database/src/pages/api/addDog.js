import createDog from "../../../server/mongodb/actions/createDog"



export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            await createDog(req.body);
            return res.status(200).send("Dog created");
        } catch (e) {
            return res.status(500).send("Error creating dog");
        }
    } else {
        return res.status(405).send("Method not allowed")
    }
}