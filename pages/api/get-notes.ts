import { NextApiHandler } from "next";
import { query } from "../../lib/db";

// TODO: Paginate results
const handler: NextApiHandler = async (req, res) => {
  try {
    const results = await query(`
      SELECT * FROM notes
      ORDER BY updated_at DESC
  `);

    return res.json(results);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export default handler;
