import express from "express";
const router = express.Router();

import { getAllWeeks, getWeekNotes } from "../models/users.js";

// /* GET users listing. */
// router.get("/", function (req, res, next) {
//   res.json({ message: "I wish we had some information to give you ☹️" });
// });

router.get("/", async (req, res) => {
  //Example: localhost:3000/cats/
  const allWeeks = await getAllWeeks();

  res.json({ success: true, message: `all weeks`, payload: allWeeks });
});

// GET specific cat by id
router.get("/:id", async (req, res) => {
  const id = Number(req.params.id);
  const requestedNotes = await getWeekNotes(id);
  res.json({
    success: true,
    message: `Found Note ${id}`,
    payload: requestedNotes,
  });
});

export default router;
