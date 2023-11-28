import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class PaginateDto {
  @ApiProperty({
    default: 1,
    required: true,
    description: `Please enter page`,
  })
  @Type(() => Number)
  @IsNumber()
  page: number = 1;

  @ApiProperty({
    default: 10,
    required: true,
    description: `Please enter page`,
  })
  @Type(() => Number)
  @IsNumber()
  limit: number = 10;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  search?: string;
}
