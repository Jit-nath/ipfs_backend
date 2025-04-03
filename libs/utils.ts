import { Request, Response } from "express";
import { create } from "ipfs-http-client";
const ipfs = create({ url: "https://ipfs.infura.io:5001/api/v0" });

export async function GetIPFS(req: Request, res: Response): Promise<void> {
  try {
    const hash = req.headers["ipfs-hash"] as string; // Get hash from headers

    if (!hash) {
      res.status(400).json({ error: "No IPFS hash provided in headers" });
    }

    let data = "";
    for await (const chunk of ipfs.cat(hash)) {
      data += chunk.toString();
    }

    res.json({ content: data });
  } catch (error) {
    const typedError = error as Error;
    res.status(500).json({ error: typedError.message });
  }
}

export async function PostIPFS(req: Request, res: Response) {}

export async function PostETH(req: Request, res: Response) {}

export async function GetETH(req: Request, res: Response) {}

export function ROOT(req: Request, res: Response) {
  res.status(400).send("ROOT route");
}
