import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { ShowConfModule } from './show-conf/show-conf.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabasePath } from './constants/Global';
import { ShowConf } from './show-conf/entities/show-conf.entity';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { FeesModule } from './fees/fees.module';
import { Fee } from './fees/entities/fee.entity';
import { ScheduleModule as ScheduleModuleRoot } from '@nestjs/schedule';
import { ScheduleModule } from './schedule/schedule.module';

@Module({
  imports: [
    ScheduleModuleRoot.forRoot(),
    ServeStaticModule.forRoot(
      {
        rootPath: join(__dirname, '..', 'public'),
        exclude: ['/api/(.*)', '/ico/(.*)'], // 排除的路径
      },
      {
        rootPath: join(__dirname, '..', 'data/ico'), // 另一个静态目录
        serveRoot: '/ico', // 设置访问路径前缀
      },
    ),
    ConfigModule.forRoot({
      envFilePath: '.env.development.local',
    }),
    TypeOrmModule.forRoot({
      type: 'better-sqlite3',
      database: DatabasePath,
      synchronize: true,
      entities: [ShowConf, User, Fee],
    }),

    ShowConfModule,
    UsersModule,
    AuthModule,
    FeesModule,
    ScheduleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
