import query from "../index.js";
import cats from "../../cats-data.js";

async function populateTable() {
  for (let i = 0; i < cats.length; i++) {
    const name = cats[i].name;
    const human = cats[i].human;
    const hobby = cats[i].hobby;

    const res = await query(
      `INSERT INTO cats (name, human, hobby) VALUES ($1, $2, $3) RETURNING name`,
      [name, human, hobby]
    );
    console.log(res);
  }
}

populateTable();