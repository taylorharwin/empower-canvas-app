import { NextApiHandler } from "next";
import { query } from "../../lib/db";

//TODO: Paginate results
const handler: NextApiHandler = async (req, res) => {
  const { search } = req.query;
  try {
    if (!search) {
      return res.status(400).json({ message: "`search` required" });
    }
    if (search.length < 4) {
      return res
        .status(400)
        .json({ message: "`search` must be at least 4 characters" });
    }
    const results = await query(
      `SELECT * FROM notes 
       WHERE MATCH(about_name, canvas_message)
       AGAINST(? IN NATURAL LANGUAGE MODE) 
       ORDER BY updated_at DESC
    `,
      [search.toString()]
    );

    return res.json(results);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export default handler;
