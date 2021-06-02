const path = require("path");

const envPath = path.resolve(process.cwd(), ".env.local");

require("dotenv").config({ path: envPath });

const mysql = require("serverless-mysql");

const db = mysql({
  config: {
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    port: process.env.MYSQL_PORT,
  },
});

async function query(q) {
  try {
    const results = await db.query(q);
    await db.end();
    return results;
  } catch (e) {
    throw Error(e.message);
  }
}

// Create "entries" table if doesn't exist
async function migrate() {
  try {
    await query(`
      INSERT INTO notes (canvas_message, about_name) VALUES ('this is the first example note', 'Taylor Harwin'),('this the second example note', 'John Doe'),('this is the third example note', 'Jane Doe')`);

    console.log("seed ran successfully");
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
}

migrate().then(() => process.exit());
