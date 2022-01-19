import express from "express";
const router = express.Router();

import {
  getAllWeeks,
  getAllNotes,
  getWeekNotes,
  addANoteToTheWeek,
  deleteANote,
  updateTags,
  updateSummary,
  updateLink,
  updateIsComplete,
} from "../models/weeks.js";

router.get("/", async (req, res) => {
  //Example: localhost:3000/cats/
  const allWeeks = await getAllWeeks();

  res.json({ success: true, message: `all weeks`, payload: allWeeks });
});

router.get("/allweeks", async (req, res) => {
  //Example: localhost:3000/cats/
  const allNotes = await getAllNotes();

  res.json({ success: true, message: `all weeks' notes`, payload: allNotes });
});

// GET specific week by id
router.get("/:id", async (req, res) => {
  const week = Number(req.params.id);
  const requestedNotes = await getWeekNotes(week);
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

router.put("/updatetags/:id", async function (req, res) {
  const id = Number(req.params.id);
  const tags = req.body.tags;
  const updatedTag = await updateTags(id, tags);
  res.json({
    success: true,
    message: `tags updated`,
    payload: updatedTag,
  });
});

router.put("/updatesummary/:id", async function (req, res) {
  const id = Number(req.params.id);
  const summary = req.body.summary;
  const updatedSummary = await updateSummary(id, summary);
  res.json({
    success: true,
    message: `summary updated`,
    payload: updatedSummary,
  });
});

router.put("/updatelink/:id", async function (req, res) {
  const id = Number(req.params.id);
  const link = req.body.link;
  const updatedLink = await updateLink(id, link);
  res.json({
    success: true,
    message: `link updated`,
    payload: updatedLink,
  });
});

router.put("/updateiscomplete/:id", async function (req, res) {
  const id = Number(req.params.id);
  const isComplete = req.body.isComplete;
  const updatedIsComplete = await updateIsComplete(id, isComplete);
  res.json({
    success: true,
    message: `isComplete updated`,
    payload: updatedIsComplete,
  });
});

router.delete("/deletebyid/:id", async function (req, res) {
  const id = Number(req.params.id);
  const deleteNote = await deleteANote(id);
  res.json({
    success: true,
    message: `deleted a note`,
    payload: deleteNote,
  });
});

export default router;
