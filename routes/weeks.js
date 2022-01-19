import express from "express";
const router = express.Router();

import {
  getAllWeeks,
  getAllNotes,
  getWeekNotes,
  addANoteToTheWeek,
  deleteANote,
} from "../models/weeks.js";

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

router.post("/:id", async function (req, res) {
  const week = Number(req.params.id);
  const tags = req.body.tags;
  const summary = req.body.summary;
  const link = req.body.link;
  const isComplete = req.body.isComplete;
  const newNote = await addANoteToTheWeek(
    week,
    tags,
    summary,
    link,
    isComplete
  );
  res.json({
    success: true,
    message: `new note created`,
    payload: newNote,
  });
});

router.get("/information", async (req, res) => {
  //Example: localhost:3000/cats/
  const allNotes = await getAllNotes();

  res.json({ success: true, message: `all notes`, payload: allNotes });
});

router.delete("/information/:id", async function (req, res) {
  const id = Number(req.params.id);
  const deleteNote = await deleteANote(id);
  res.json({
    success: true,
    message: `deleted a note`,
    payload: deleteNote,
  });
});

export default router;
