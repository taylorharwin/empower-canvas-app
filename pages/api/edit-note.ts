import { NextApiHandler } from "next";
import { query } from "../../lib/db";

const handler: NextApiHandler = async (req, res) => {
  const { id, canvas_message, about_name } = req.body;
  try {
    if (!id || !canvas_message || !about_name) {
      return res.status(400).json({
        message: "`id`,`canvas_message`, and `about_name` are all required",
      });
    }

    const results = await query(
      `
      UPDATE notes
      SET canvas_message = ?, about_name = ?
      WHERE id = ?
      `,
      [canvas_message, about_name, id]
    );

    return res.json(results);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export default handler;
