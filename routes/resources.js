import express from "express";
const router = express.Router();

import { getAllResources } from "../models/resources.js";

//done
router.get("/", async (req, res) => {
	const allResources = await getAllResources();
	res.json({ success: true, message: `all resources`, payload: allResources });
});

export default router;
