import { prisma } from "../prisma";
import { ValidateTokenRequestDTO, ValidateTokenResponseDTO } from "../routes/types";

export async function validateToken(requestObj: ValidateTokenRequestDTO): Promise<ValidateTokenResponseDTO> {
  const responseObj: ValidateTokenResponseDTO = {isValid: false};
  const result = await prisma.token.findUnique({
    where: {
      token: requestObj.token
    }
  });
  if (result) {
    responseObj.isValid = true;
  }
  return responseObj
}