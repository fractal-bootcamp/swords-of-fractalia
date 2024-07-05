import { Request, Response } from "express";

import type { LoginRequestDTO } from './types';
import { Player } from "@prisma/client";
import { login } from "../functions/login";

export async function loginHandler(req: Request, res: Response): Promise<void> {
  const requestObj = req.body as LoginRequestDTO;
  console.log(`POST /login: ${requestObj.user}, ${requestObj.password}`);
  const responseObj = await login(requestObj);
  res.json(responseObj);
}