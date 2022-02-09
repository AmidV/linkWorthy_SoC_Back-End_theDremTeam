import express from "express";
const router = express.Router();

import {
	getAllWeeks,
	getResourcesForWeek,
	addResourceToWeekID,
	getWeekByID,
	deleteResourceByID,
	updatePost,
} from "../models/weeks.js";

//done
router.get("/", async (req, res) => {
	const allWeeks = await getAllWeeks();
	res.json({ success: true, message: `all weeks`, payload: allWeeks });
});

//done
router.get("/:id/resources", async (req, res) => {
	const id = Number(req.params.id);
	const resources = await getResourcesForWeek(id);
	res.json({
		success: true,
		message: `all resources requested for week ${id}`,
		payload: resources,
	});
});

//done
router.post("/:id/resources", async function (req, res) {
	const week = Number(req.params.id);
	const tags = req.body.tags;
	const summary = req.body.summary;
	const link = req.body.link;
	const isComplete = req.body.isComplete;
	const resource = await addResourceToWeekID(
		week,
		tags,
		summary,
		link,
		isComplete
	);
	res.json({
		success: true,
		message: `new note created`,
		payload: resource,
	});
});

//done
router.delete("/:weekid/resources/:resourceid", async function (req, res) {
	const id = Number(req.params.resourceid);
	const resource = await deleteResourceByID(id);
	res.json({
		success: true,
		message: `deleted a resource ${id} `,
		payload: resource,
	});
});

//done
router.get("/:id", async (req, res) => {
	const id = Number(req.params.id);
	const week = await getWeekByID(id);
	res.json({
		success: true,
		message: `requested week ${id}`,
		payload: week,
	});
});

/*
router.patch("/:weekid/resources/:resourcesid", async function (req, res) {
	const id = Number(req.params.resourcesid);
	const updatedReource = await updateIsCompleteStatus(id);
	res.json({
		success: true,
		message: `resource ${id} completion status updated`,
		payload: updatedReource,
	});
});
*/
router.patch("/:weekid/resources/:resourcesid", async function (req, res) {
	const id = Number(req.params.resourcesid);
	const tags = req.body.tags;
	const summary = req.body.summary;
	const link = req.body.link;
	const updatedPost = await updatePost(id, tags, summary, link);
	res.json({
		success: true,
		message: `resource ${id} updated`,
		payload: updatedPost,
	});
});

export default router;
