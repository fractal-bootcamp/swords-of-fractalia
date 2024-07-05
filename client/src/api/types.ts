export type LoginRequestDTO = {
  user: string;
  password: string;
}

export type LoginResponseDTO = {
  token: string | null;
}

export type ValidateTokenRequestDTO = {
  token: string;
}

export type ValidateTokenResponseDTO = {
  isValid: boolean;
}