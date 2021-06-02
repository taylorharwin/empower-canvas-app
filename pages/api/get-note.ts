import { NextApiHandler } from "next";
import { query } from "../../lib/db";

const handler: NextApiHandler = async (req, res) => {
  const { id } = req.query;

  if (!id) {
    res.status(400).json({ message: `id is required` });
  }

  if (typeof parseInt(id, 10) !== "number") {
    res.status(400).json({ message: `id must be a number` });
  }

  try {
    const results = await query(
      `
      SELECT * FROM notes
      WHERE id=?
  `,
      [id]
    );

    return res.json(results[0]);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export default handler;
