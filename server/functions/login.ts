import { response } from "express";
import { prisma } from "../prisma";
import type { LoginRequestDTO, LoginResponseDTO } from "../routes/types";

export async function login(requestObj: LoginRequestDTO): Promise<LoginResponseDTO> {
  const responseObj: LoginResponseDTO = {token: null};
  if (!requestObj.user) {
    return responseObj;
  }

  let player = await prisma.player.findUnique({
    where: {
      username: requestObj.user
    }
  });

  // Create user if not exists
  if (!player) {
    player = await prisma.player.create({
      data: {
        username: requestObj.user,
        password: requestObj.password
      }
    });
    const newToken = await prisma.token.create({
      data: {
        username: player.username
      }
    });
    responseObj.token = newToken.token;
    return responseObj;
  }

  // Log in existing user
  else {
    if (player.password === requestObj.password) {
      const newToken = await prisma.token.create({
        data: {
          username: player.username
        }
      });
      responseObj.token = newToken.token;
    }
  }

  return responseObj;
}
