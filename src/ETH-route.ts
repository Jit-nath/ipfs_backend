import express from "express";
import { GetETH, PostETH } from "../libs/utils";
const app = express();

app.get("/eth/hash/", GetETH);
app.post("/eth/post", PostETH);
