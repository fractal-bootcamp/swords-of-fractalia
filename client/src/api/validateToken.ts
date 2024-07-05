import axios from 'axios'
import type { ValidateTokenRequestDTO, ValidateTokenResponseDTO } from './types';

export async function validateToken(token: string): Promise<ValidateTokenResponseDTO> {
  const requestObj: ValidateTokenRequestDTO = {token};
  const responseObj = await axios.post<ValidateTokenResponseDTO>('http://localhost:3000/validateToken', requestObj);
  return responseObj.data;
}