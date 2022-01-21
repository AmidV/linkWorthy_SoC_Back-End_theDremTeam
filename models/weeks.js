import query from "../db/index.js";

//done
export async function getAllWeeks() {
	const data = await query(`SELECT * FROM weeks;`);
	return data.rows;
}

//done
export async function getResourcesForWeek(id) {
	const data = await query(
		`SELECT * FROM information 
	WHERE week = $1
	ORDER BY isComplete ASC, id ASC;`,
		[id]
	);
	return data.rows;
}

//done
export async function addResourceToWeekID(
	week,
	tags,
	summary,
	link,
	isComplete
) {
	const data = await query(
		`INSERT INTO information ( week, tags, summary, link, isComplete ) VALUES ( $1, $2, $3, $4, $5 )  RETURNING *;`,
		[week, tags, summary, link, isComplete]
	);
	return data.rows;
}

//done
export async function deleteResourceByID(id) {
	const data = await query(
		`DELETE FROM information WHERE id = $1 RETURNING *;`,
		[id]
	);
	return data.rows;
}

//done
export async function getWeekByID(id) {
	const data = await query(`SELECT * FROM weeks WHERE id = $1;`, [id]);
	return data.rows;
}

function changeIsCompleteStatus(status) {
	if (status) {
		const newStatus = false;
		return newStatus;
	} else {
		const newStatus = true;
		return newStatus;
	}
}

//done
export async function getResourceByID(id) {
	const data = await query(`SELECT * FROM information WHERE id = $1;`, [id]);
	return data.rows;
}

export async function updateIsCompleteStatus(id) {
	const selectedResource = await getResourceByID(id);
	const currentStatus = selectedResource[0].isComplete;
	const isComplete = changeIsCompleteStatus(currentStatus);
	const data = await query(
		`UPDATE information 
		SET isComplete = $1 
		WHERE id = $2
		RETURNING *;`,
		[isComplete, id]
	);
	return data.rows;
}
