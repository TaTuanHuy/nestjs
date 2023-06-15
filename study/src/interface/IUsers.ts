import { IsNumber, IsString } from 'class-validator';

export class IUserInputUpdate {
  @IsString()
  user_name: string;
  @IsString()
  @IsNumber()
  pass_word: string;
  @IsString()
  full_name: string;
  @IsString()
  user_id: string;
}

export class IUserInputDTO {
  @IsString()
  @IsNumber()
  user_name: string;
  @IsString()
  pass_word: string;
}
