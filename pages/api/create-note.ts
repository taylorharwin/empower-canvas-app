import { NextApiHandler } from "next";
import { query } from "../../lib/db";

const handler: NextApiHandler = async (req, res) => {
  const { canvas_message, about_name } = req.body;
  try {
    if (!about_name || !canvas_message) {
      return res.status(400).json({
        message: "`about_name` and `canvas_message` are both required",
      });
    }

    const results = await query(
      `
      INSERT INTO notes (about_name, canvas_message)
      VALUES (?, ?)
      `,
      [about_name, canvas_message]
    );

    return res.json(results);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export default handler;
