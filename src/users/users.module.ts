import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { FeesModule } from 'src/fees/fees.module';
import { ConfigModule } from '@nestjs/config';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forFeature([User]),
    FeesModule,
    MulterModule.register({
      storage: diskStorage({
        destination: join(process.cwd(), 'data/ico'), // 存储路径
        filename: (_, file, cb) => cb(null, 'favicon.ico'), // 统一存为 favicon.ico
      }),
      fileFilter: (_, file, cb) => {
        console.log(file, file.mimetype);
        if (
          file.mimetype === 'image/x-icon' ||
          file.mimetype === 'image/vnd.microsoft.icon'
        ) {
          cb(null, true);
        } else {
          cb(null, false);
        }
      },
    }),
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
