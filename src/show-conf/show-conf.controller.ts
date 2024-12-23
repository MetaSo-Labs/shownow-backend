import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ShowConfService } from './show-conf.service';
import { CreateShowConfDto } from './dto/create-show-conf.dto';
import { UpdateShowConfDto } from './dto/update-show-conf.dto';
import { Public } from 'src/auth/decorators/public.decorator';

@Controller('show-conf')
export class ShowConfController {
  constructor(private readonly showConfService: ShowConfService) {}

  @Post()
  create(@Body() createShowConfDto: CreateShowConfDto) {
    return this.showConfService.create(createShowConfDto);
  }

  @Get('styles')
  findAllStyles() {
    return this.showConfService.findAllStyles();
  }

  @Post('save')
  save(@Body() createShowConfDto: CreateShowConfDto) {
    return this.showConfService.save(createShowConfDto);
  }

  @Post('saveAndApply')
  saveAndApply(@Body() createShowConfDto: CreateShowConfDto) {
    return this.showConfService.saveAndApply(createShowConfDto);
  }

  @Get()
  @Public()
  findAll() {
    return this.showConfService.findAll();
  }
}
