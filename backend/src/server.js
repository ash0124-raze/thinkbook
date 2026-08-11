// import dns from 'node:dns';
// dns.setServers(['1.1.1.1', '8.8.8.8']); // Forces Node to use Cloudflare/Google DNS directly

// // ... your existing imports like import express from 'express'; etc.




// // const express = require("express");
// import notesRoute from "./routes/notesroute.js";

// import dotenv from "dotenv";
// import ratelimit from "./config/upstash.js";
// import rateLimiter from "./middleware/ratelimit.js";
// import cors from "cors";

// dotenv.config();

// import { connectDB } from "./config/db.js";
// import express from "express";

// console.log(process.env.MONGO_URI);

// const app = express();
// const PORT = process.env.PORT || 5001;
// connectDB();

// app.use(cors({origin:"http://localhost:5173",})
// );
// app.use(express.json());
// app.use(rateLimiter);

// // app.use((req,res,next) => {
// //     console.log(`Req method is &{req.method} & Req URL is &{req.url}`);
// //     next();
// // });

// app.use("/api/notes",notesRoute);
// // app.use("/api/product",productRoute);
// // app.use("/api/posts",postsRoute);
// // app.use("/api/payments",paymentsRoute);
// // app.use("/api/emails",emailRoute);


// app.listen(5001,() =>{
//     console.log("server started running on PORT:",PORT);
// });


// //mongodb+srv://<db_username>:P4AQhXMEZdvZQ79W@cluster0.emvb70n.mongodb.net/?appName=Cluster0

// server.js
import dns from 'node:dns';
dns.setServers(['1.1.1.1', '8.8.8.8']); 

import dotenv from "dotenv";
dotenv.config(); 

import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/ratelimit.js";

// Route imports
import notesRoute from "./routes/notesroute.js";
import authRoute from "./routes/authroutes.js"; // Import new auth routes

// Middleware import
import { protect } from "./middleware/auth.js"; // Import protect middleware

const app = express();
const PORT = process.env.PORT || 5001;
connectDB();

app.use(cors({ origin: ["http://localhost:5173","https://thinkbook-phi.vercel.app"] }));
app.use(express.json());
app.use(rateLimiter);

// Register routes
app.use("/api/auth", authRoute); // Public routes for login/register
app.use("/api/notes", protect, notesRoute); // Protect the notes route by injecting the middleware

app.listen(PORT, () => {
    console.log("server started running on PORT:", PORT);
});