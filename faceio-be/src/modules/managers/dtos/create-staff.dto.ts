import {
  IsArray,
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
  isEmail,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateStaffDto {
  @ApiProperty({
    required: true,
  })
  @IsString()
  name: string;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  age?: number;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  position: string;
}
