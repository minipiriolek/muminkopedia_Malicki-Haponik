import express from "express";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";
import characterRoutes from "./routes/characterRoutes";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/characters", characterRoutes);

app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req, res) => {
    res.json({ message: "API Express + TypeScript działa!" });
});

export default app;