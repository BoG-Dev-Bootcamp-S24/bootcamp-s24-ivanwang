import deleteTicket from "../../../server/mongodb/actions/deleteTicket";

export default async function handler(req, res)  {
    try {
        if (req.method == 'DELETE') {
            const response = await deleteTicket(req.query);
            if (response) {
                res.status(200).send("Success")
            } else {
                res.status(500).send("Failed");
            }
        }
    } catch (error) {
        res.status(500).send("Failed");
    }
}