import query from "../index.js";
// import weeks from "../../libs/data.js";
// import information from "../../libs/data.js";

const sqlString = `DROP TABLE weeks;`;
const sqlString2 = `DROP TABLE information;`;

async function deleteWeeksTable() {
  const res = await query(sqlString);
  console.log("Weeks table deleted:", res);
}

async function deleteInfoTable() {
  const res = await query(sqlString2);
  console.log("Info table deleted:", res);
}

deleteWeeksTable();
deleteInfoTable();
