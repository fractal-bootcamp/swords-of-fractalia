import axios from 'axios';
import type { LoginRequestDTO, LoginResponseDTO } from "./types";

export async function login(user: string, password: string): Promise<LoginResponseDTO> {
  const requestObj: LoginRequestDTO = {user, password};
  const responseObj = await axios.post<LoginResponseDTO>('http://localhost:3000/login', requestObj);
  return responseObj.data;
}