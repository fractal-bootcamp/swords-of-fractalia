import { Request, Response } from 'express'
import { prisma } from '../prisma'
import { validateToken } from '../functions/validateToken';
import { ValidateTokenRequestDTO, ValidateTokenResponseDTO } from './types';
export async function validateTokenHandler(req: Request, res: Response): Promise<void> {
  const requestObj = req.body;
  console.log(`POST /validateToken: ${requestObj.token}`);
  const responseObj = await validateToken(requestObj);
  res.json(responseObj);
}