import updateTicketByUser from "../../../server/mongodb/actions/updateTicketByUser";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            await updateTicketByUser(req.body);
            return res.status(200).send('Success');
        } catch {
            return res.status(500).send('Failed');
        }
    } else {
        res.status(405).send('Method not allowed');
    }
}