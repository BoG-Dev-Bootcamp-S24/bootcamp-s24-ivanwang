import readTicketsByUser from "../../../server/mongodb/actions/readTicketsByUser"

export default async function handler(req, res)  {
    try {
        if (req.method == 'GET') {
            const response = await readTicketsByUser(req.query);
            if (response) {
                if (response.length == 0) {
                    res.status(400).send("This user has no tickets")
                } else if (response[0] == "nouser" && response.length == 1) {
                    res.status(400).send("User not found")
                } else {
                    res.status(200).json(response);
                }
            } else {
                res.status(500).send("Failed")
            }
        }
    } catch (error) {
        res.status(500).send("Failed")
    }
}