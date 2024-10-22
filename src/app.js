/** @format */

import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

mongoose.set("strictQuery", false);

// Rutas:
import mocksRouter from "./routes/mocks.router.js";
import usersRouter from "./routes/users.router.js";
import petsRouter from "./routes/pets.router.js";
import adoptionsRouter from "./routes/adoption.router.js";
import sessionsRouter from "./routes/sessions.router.js";

const app = express();
const PORT = process.env.PORT || 8080;

mongoose.connect(`mongodb+srv://achavsjg:inicio123@cluster1.xtptm.mongodb.net/backend3?retryWrites=true&w=majority&appName=Cluster1`);

app.use(express.json());
app.use(cookieParser());
app.use("/api/users", usersRouter);
app.use("/api/pets", petsRouter);
app.use("/api/adoptions", adoptionsRouter);
app.use("/api/sessions", sessionsRouter);
app.use("/api/mocks", mocksRouter);

app.listen(PORT, () => console.log(`Servidor escuchando en el http://localhost:${PORT}`));