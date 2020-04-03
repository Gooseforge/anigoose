import { IsNotEmpty, IsEmail } from 'class-validator';

/**
 * CreateUserDTO
 * @description Used for transferring register form data to server.
 */
export class CreateUserDTO {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}

/**
 * LoginUserDTO
 * @description Used for transferring login form data to server.
 */
export class LoginUserDTO {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;

  remember?: boolean;
}

/**
 * UserAuthenticationDTO
 * @description Used to return data when the server succesfully authenticates a user.
 */
export class UserAuthenticationDTO {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  token: string;
}
