import query from "../index.js";
import weeks from "../../libs/data.js";
import sampleInfo from "../../libs/data.js";

async function populateTable() {
  for (let i = 0; i < weeks.length; i++) {
    const topic = weeks[i].topic;

    const res = await query(
      `INSERT INTO weeks (topic) VALUES ($1) RETURNING *`,
      [topic]
    );
    console.log(res);
  }
}

async function populateTable2() {
  for (let i = 0; i < sampleInfo.length; i++) {
    const week = sampleInfo[i].week;
    const tags = sampleInfo[i].tags;
    const summary = sampleInfo[i].summary;
    const link = sampleInfo[i].link;
    const isComplete = sampleInfo[i].isComplete;

    const res = await query(
      `INSERT INTO information (week, tags, summary, link, isComplete) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [week, tags, summary, link, isComplete]
    );
    console.log(res);
  }
}

populateTable();
populateTable2();
