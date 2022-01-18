/*
- Import query from db/index.js 
- Write SQL query to create a table - look at the books data to decide on columns and name 
- Use our query function and hand it our SQL string inside of a createBooksTable function 
- Call our createBooksTable function
*/

import query from "../index.js";

const sqlString = `CREATE TABLE IF NOT EXISTS weeks (id SERIAL PRIMARY KEY, topic TEXT)`;

const sqlString2 = `CREATE TABLE IF NOT EXISTS information (id SERIAL PRIMARY KEY, week_id INTEGER, tags TEXT, summary TEXT, link TEXT, isComplete BOOL no null default '0')`;

async function createTable() {
  const res = await query(sqlString);
  console.log("Created weeks table", res);
}

async function createTable2() {
  const res = await query(sqlString2);
  console.log("Created information table", res);
}

createTable();
createTable2();
