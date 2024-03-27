import createTicket from "../../../server/mongodb/actions/createTicket";

export default async function handler(req, res)  {
    try {
        if (req.method == 'POST') {
            const response = await createTicket(req.query);
            if (response) {
                res.status(200).send("Success")
            } else {
                res.status(500).send("Failed")
            }
        }
    } catch (error) {
        res.status(500).send("Failed")
    }
}