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
  Request,
} from '@nestjs/common';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Public } from 'src/auth/decorators/public.decorator';
import { FileInterceptor } from '@nestjs/platform-express';
import { join } from 'path';

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
  updateAdminDistribution(@Body() updateUserDto: { distribution: boolean }) {
    return this.usersService.updateAdminDistribution(updateUserDto);
  }

  @Post('admin-assist')
  updateAdminAssist(@Body() updateUserDto: { assist: boolean }) {
    return this.usersService.updateAdminAssist(updateUserDto);
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

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: join(process.cwd(), 'data/ico'), // 存储路径
        filename: (_, file, cb) =>
          cb(null, uuidv4() + file.originalname.match(/\..*$/)[0]),
      }),
      fileFilter: (_, file, cb) => {
        console.log(file, file.mimetype);
        if (file.mimetype.includes('image')) {
          cb(null, true);
        } else {
          cb(null, false);
        }
      },
    }),
  )
  upload(@UploadedFile() file: File, @Request() req) {
    console.log(file);
    console.log(req.file);
    if (!file) {
      throw new HttpException('Please upload a img', HttpStatus.BAD_REQUEST);
    }
    const fileUrl = `/ico/${req.file.filename}`;
    return {
      url: fileUrl,
    };
  }
}
