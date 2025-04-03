import express from "express";
import { GetIPFS, PostIPFS } from "../libs/utils";
const app = express();

app.get("/ipfs/hash/", GetIPFS);
app.post("/ipfs/post", PostIPFS);
