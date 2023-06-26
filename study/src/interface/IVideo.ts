import {
  IsEmail,
  IsNotEmpty,
  Matches,
  IsNumber,
  IsString,
} from 'class-validator';
export class IVideo {
  @IsString()
  @IsNotEmpty()
  video_name: string;

  @IsNotEmpty()
  @IsString()
  video_id: string;

  @IsNotEmpty()
  @IsString()
  video_description: string;

  @IsNotEmpty()
  @IsString()
  author_video: string;

  user: number;

  @IsNotEmpty()
  @IsNumber()
  id: number;
}
