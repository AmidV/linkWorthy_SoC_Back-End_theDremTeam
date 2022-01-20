import query from "../db/index.js";

//done
export async function getAllResources() {
	const data = await query(`SELECT * FROM infromation;`);
	return data.rows;
}
