import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  Put,
  Req,
  Query,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { MessageEnum } from 'src/common/enums/message.enum';
import { PaginateDto } from 'src/common/dtos/paginate.dto';
import { StaffsService } from './staff.service';
import { CreateStaffDto } from './dtos/create-staff.dto';
import { UpdateStaffDto } from './dtos/update-staff.dto';

@ApiTags('Staffs')
@Controller('manager')
export class StaffsController {
  constructor(private readonly staffsService: StaffsService) {}
  @Get('/')
  @HttpCode(HttpStatus.OK)
  async getAllStaffs(@Query() paginateDto: PaginateDto) {
    const res = {
      message: MessageEnum.GET_ALL_STAFFS_SUCCESSFULLY,
      result: await this.staffsService.findAllStaffs(paginateDto),
    };
    return res;
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  async getStaffById(@Param('id') id: string) {
    const res = {
      message: MessageEnum.GET_STAFF_DETAIL_SUCCESSFULLY,
      result: await this.staffsService.findByIdStaff(id),
    };
    return res;
  }

  @Post('/')
  @HttpCode(HttpStatus.OK)
  async createStaff(@Body() createStaffDto: CreateStaffDto) {
    const res = {
      message: MessageEnum.CREATE_STAFF_SUCCESSFULLY,
      result: await this.staffsService.createStaff(createStaffDto),
    };
    return res;
  }

  @Put('/:id')
  @HttpCode(HttpStatus.OK)
  async updateStaff(
    @Param('id') id: string,
    @Body() updateStaffDto: UpdateStaffDto,
  ) {
    const res = {
      message: MessageEnum.UPDATE_STAFF_SUCCESSFULLY,
      result: await this.staffsService.updateStaff(id, updateStaffDto),
    };
    return res;
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.OK)
  async deleteStaff(@Param('id') id: string) {
    const res = {
      message: MessageEnum.UPDATE_STAFF_SUCCESSFULLY,
      result: await this.staffsService.deleteStaff(id),
    };
    return res;
  }
}
