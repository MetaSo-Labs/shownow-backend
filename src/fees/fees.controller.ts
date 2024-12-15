import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FeesService } from './fees.service';
import { CreateFeeDto } from './dto/create-fee.dto';
import { UpdateFeeDto } from './dto/update-fee.dto';
import { Public } from 'src/auth/decorators/public.decorator';

@Controller('fees')
export class FeesController {
  constructor(private readonly feesService: FeesService) {}

  @Post()
  create(@Body() createFeeDto: CreateFeeDto) {
    return this.feesService.create(createFeeDto);
  }

  @Public()
  @Get()
  findAll() {
    return this.feesService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.feesService.findOne(+id);
  // }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFeeDto: UpdateFeeDto) {
    return this.feesService.update(+id, updateFeeDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.feesService.remove(+id);
  // }
}
