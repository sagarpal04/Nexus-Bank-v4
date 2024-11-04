import mysql2 from "mysql2";
import dotenv from "dotenv";
dotenv.config();

const db = mysql2.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});
db.connect((err) => {
  if (err) {
    console.log("Error connecting to database");
    return;
  }
  console.log("Connected to Database ");
});
export default db;
