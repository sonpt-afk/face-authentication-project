import { IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { RoleEnum } from 'src/common/enums/role.enum';

export class CreateUserDto {
  @ApiProperty({
    required: true,
  })
  @IsString()
  facialId: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  gender?: string;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  age?: number;

  @ApiProperty()
  @IsString()
  @IsOptional()
  timestamp?: string;
}
