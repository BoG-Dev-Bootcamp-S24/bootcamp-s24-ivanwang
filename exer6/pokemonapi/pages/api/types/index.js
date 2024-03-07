

export default async function handler(req, res) {
    res.status(400).json({ error: "Name of type is required" });
}