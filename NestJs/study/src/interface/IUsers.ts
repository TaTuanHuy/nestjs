import { IsNumber, IsString } from 'class-validator';

export class IUserInputUpdate {
  @IsString()
  user_name: string;
  @IsString()
  @IsNumber()
  pass_word: string | number;
  @IsString()
  full_name: string;
  @IsString()
  user_id: string;
}

export class IUserInputDTO {
  @IsString()
  @IsNumber()
  user_name: string | number;
  @IsString()
  pass_word: string | number;
}
