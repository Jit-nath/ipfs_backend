import express from "express";
import { ROOT } from "../libs/utils";

const app = express();

app.get("/", ROOT);
