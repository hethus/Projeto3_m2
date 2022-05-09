import dotenv from "dotenv";
import express from "express";
import path from "path";
import { routers } from "./src/routers/routers.js";

dotenv.config();

const __dirname = path.resolve(path.dirname(""));
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.use(routers);
app.use(express.static(path.join(__dirname, "public")));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));