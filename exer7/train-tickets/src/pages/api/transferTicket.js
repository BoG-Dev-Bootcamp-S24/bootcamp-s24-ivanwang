import updateTicketByUser from "../../../server/mongodb/actions/updateTicketByUser";

export default async function handler(req, res)  {
    try {
        if (req.method == 'PATCH') {
            const response = await updateTicketByUser(req.query);
            if (response) {
                if (response.length == 0) {
                    res.status(400).send("User not found")
                } else if (response == "NoTix") {
                    res.status(400).send("Ticket not found")
                } else {
                    res.status(200).send("Success")
                }
            } else {
                res.status(500).send("Failed")
            }
        }
    } catch (error) {
        res.status(500).send("Failed")
    }
}