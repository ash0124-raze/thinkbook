// import mongoose from "mongoose";

// const noteSchema = new mongoose.Schema({
//     title: {
//         type: String,
//         required: true,

//     },
//      content: {
//         type : String,
//         required:true,
//      },

// }
// ,
// {timestamps:true});    ///createdat or updatedat

// const Note = mongoose.model("Note",noteSchema)

// export default Note
// models/Note.js
import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    title: {
        type: String,
        required: true,
    }, 
    content: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const Note = mongoose.model("Note", noteSchema);
export default Note;