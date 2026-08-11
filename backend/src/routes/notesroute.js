import express from "express";
import { createNotes, deleteNotes, getAllNotes, getNoteById, updateNotes } from "../controllers/notescontroller.js";

const router = express.Router();

router.get("/",getAllNotes);

router.get("/:id",getNoteById);

router.post("/",createNotes);

router.put("/:id",updateNotes);

router.delete("/:id",deleteNotes);

export default router;

// app.get("/api/notes",(req,res)=>{
//     res.status(200).send("yahello");
// });

// app.post("/api/notes",(req,res)=>{
//     res.status(201).json({message:"post created succesfully!"});
// });

// app.put("/api/notes/:id",(req,res)=>{
//     res.status(200).jason({message:"Note updated succesfully"});
// });

// app.delete("/api/notes/:id",(req,res)=>{
//     res.status(200).jason({message:"Note deleted "});
// });