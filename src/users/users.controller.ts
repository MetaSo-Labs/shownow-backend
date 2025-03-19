import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Public } from 'src/auth/decorators/public.decorator';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Public()
  @Get('admin')
  findAdmin() {
    return this.usersService.findAdmin();
  }

  @Post('admin')
  updateAdmin(@Body() updateUserDto: UpdateUserDto) {
    return this.usersService.updateAdmin(updateUserDto);
  }

  @Post('admin-distribution')
  updateAdminDistribution(@Body() updateUserDto: {
    distribution: boolean;
  }) {
    return this.usersService.updateAdminDistribution(updateUserDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }

  @Post('ico')
  @UseInterceptors(FileInterceptor('file'))
  uploadIco(@UploadedFile() file: File) {
    if (!file) {
      throw new HttpException(
        'Please upload a favicon',
        HttpStatus.BAD_REQUEST,
      );
    }
    return {
      message: 'Favicon uploaded successfully',
    };
  }
}
